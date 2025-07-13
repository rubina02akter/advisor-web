import { useEffect, useState, useContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../src/Hooks/useAxiosPublic";
import AuthContext from "../context/AuthContext";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function UpdateCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const email = user?.email || "";

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      features: [{ value: "" }],
      technology: [{ name: "" }],
    },
  });

  const {
    fields: featureFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control,
    name: "features",
  });

  const {
    fields: techFields,
    append: appendTech,
    remove: removeTech,
  } = useFieldArray({
    control,
    name: "technology",
  });

  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState("");
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    // Fetch the course data by id
    axiosPublic
      .get(`/my-course/${id}`)
      .then((res) => {
        const course = res.data;
        // Set form default values based on fetched course
        reset({
          title: course.title || "",
          level: course.level || "",
          description: course.description || "",
          features: course.features?.length
            ? course.features.map((f) => ({ value: f }))
            : [{ value: "" }],
          technology: course.technology?.length
            ? course.technology.map((t) => ({ name: t }))
            : [{ name: "" }],
          lessons: course.lessons || 0,
          project: course.project || 0,
          duration: course.duration || 0,
          originalPrice: course.originalPrice || 0,
          discountedPrice: course.discountedPrice || 0,
          instructor: course.instructor || "",
          category: course.category || "",
          image: null, // file input is empty initially
          status: course.status || "active",
        });
        setCurrentImage(course.image || "");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch course:", error);
        Swal.fire("Error", "Failed to load course data", "error");
        setLoading(false);
      });
  }, [id, reset, axiosPublic]);

  const onSubmit = async (data) => {
    let imageUrl = currentImage;

    // If user uploads a new image, upload it to imgbb
    if (data.image && data.image.length > 0) {
      const imageFile = new FormData();
      imageFile.append("image", data.image[0]);

      try {
        const imageResponse = await axiosPublic.post(image_hosting_api, imageFile);
        if (imageResponse.data.success) {
          imageUrl = imageResponse.data.data.display_url;
        }
      } catch (error) {
        console.error("Image upload failed:", error);
        Swal.fire({
          icon: "error",
          title: "Image Upload Failed",
          text: "Failed to upload course image. Please try again.",
        });
        return;
      }
    }

    const updatedCourse = {
      title: data.title,
      level: data.level,
      description: data.description,
      features: data.features
        .map((f) => f.value)
        .filter((val) => val.trim() !== ""),
      technology: data.technology
        .map((t) => t.name)
        .filter((name) => name.trim() !== ""),
      lessons: parseInt(data.lessons),
      project: parseInt(data.project),
      duration: parseInt(data.duration),
      originalPrice: parseFloat(data.originalPrice),
      discountedPrice: parseFloat(data.discountedPrice),
      instructor: data.instructor,
      category: data.category,
      image: imageUrl,
      status: data.status,
      email,
    };

    try {
      const response = await axiosPublic.patch(`/courses/${id}`, updatedCourse);
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Course updated successfully!",
        }).then(() => {
          navigate("/my-added-course");
        });
      } else {
        Swal.fire("Info", "No changes detected or update failed", "info");
      }
    } catch (error) {
      console.error("Course update failed:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text:
          error.response?.data?.message ||
          "Failed to update course. Please try again.",
      });
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="w-11/12 mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Update Course</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title & Category */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Course Title*</span>
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Enter title"
              className="input input-bordered w-full"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">Title is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <input
              type="text"
              {...register("category", { required: true })}
              placeholder="Enter category"
              className="input input-bordered w-full"
            />
            {errors.category && (
              <span className="text-red-500 text-sm">Category is required</span>
            )}
          </div>
        </div>

        {/* Level */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Level</span>
          </label>
          <input
            type="text"
            {...register("level")}
            placeholder="Enter course level"
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description*</span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full h-32"
            placeholder="Enter course description"
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">Description is required</span>
          )}
        </div>

        {/* Features and Technology */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Course Features*</span>
            </label>
            <div className="space-y-2">
              {featureFields.map((field, index) => (
                <div key={field.id} className="flex gap-2 items-center">
                  <input
                    type="text"
                    {...register(`features.${index}.value`, { required: true })}
                    placeholder={`Feature ${index + 1}`}
                    className="input input-bordered flex-1"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="btn btn-error btn-sm"
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => appendFeature({ value: "" })}
                className="btn btn-outline btn-sm mt-2"
              >
                <FaPlusCircle className="mr-1" /> Add Feature
              </button>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Technology you will learn</span>
            </label>
            <div className="space-y-2">
              {techFields.map((field, index) => (
                <div key={field.id} className="flex gap-2 items-center">
                  <input
                    type="text"
                    {...register(`technology.${index}.name`)}
                    placeholder={`tech name ${index + 1}`}
                    className="input input-bordered flex-1"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeTech(index)}
                      className="btn btn-error btn-sm"
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => appendTech({ name: "" })}
                className="btn btn-outline btn-sm mt-2"
              >
                <FaPlusCircle className="mr-1" /> Add Technology
              </button>
            </div>
          </div>
        </div>

        {/* Lessons & Project */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Number of Lessons*</span>
            </label>
            <input
              type="number"
              {...register("lessons", { required: true, min: 0 })}
              placeholder="e.g. 12"
              className="input input-bordered"
            />
            {errors.lessons && (
              <span className="text-red-500 text-sm">Valid number required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Number of Projects*</span>
            </label>
            <input
              type="number"
              {...register("project", { required: true, min: 0 })}
              placeholder="e.g. 3"
              className="input input-bordered"
            />
            {errors.project && (
              <span className="text-red-500 text-sm">Valid number required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Duration (hours)*</span>
            </label>
            <input
              type="number"
              {...register("duration", { required: true, min: 0 })}
              placeholder="e.g. 24"
              className="input input-bordered"
            />
            {errors.duration && (
              <span className="text-red-500 text-sm">Valid number required</span>
            )}
          </div>
        </div>

        {/* Pricing */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Original Price*</span>
            </label>
            <input
              type="number"
              step="0.01"
              {...register("originalPrice", { required: true, min: 0 })}
              placeholder="e.g. 100"
              className="input input-bordered"
            />
            {errors.originalPrice && (
              <span className="text-red-500 text-sm">Valid price required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Discounted Price*</span>
            </label>
            <input
              type="number"
              step="0.01"
              {...register("discountedPrice", { required: true, min: 0 })}
              placeholder="e.g. 80"
              className="input input-bordered"
            />
            {errors.discountedPrice && (
              <span className="text-red-500 text-sm">Valid price required</span>
            )}
          </div>
        </div>

        {/* Instructor */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor*</span>
          </label>
          <input
            type="text"
            {...register("instructor", { required: true })}
            placeholder="Instructor name"
            className="input input-bordered w-full"
          />
          {errors.instructor && (
            <span className="text-red-500 text-sm">Instructor is required</span>
          )}
        </div>

        {/* Status */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <select
            {...register("status")}
            className="select select-bordered w-full max-w-xs"
            defaultValue="active"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Course Image</span>
          </label>
          <input
            type="file"
            {...register("image")}
            accept="image/*"
            className="file-input file-input-bordered w-full max-w-xs"
          />
          {currentImage && (
            <div className="mt-2">
              <p>Current Image:</p>
              <img
                src={currentImage}
                alt="Current course"
                className="w-48 h-auto rounded-md border"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Update Course
        </button>
      </form>
    </div>
  );
}
