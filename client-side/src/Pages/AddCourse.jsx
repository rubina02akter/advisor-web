import { useForm, useFieldArray } from "react-hook-form";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../src/Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCourse = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      features: [{ value: "" }],
      tech: [{ name: "" }],
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
    fields: techField,
    append: appendTech,
    remove: removeTech,
  } = useFieldArray({
    control,
    name: "technology",
  });

  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    let imageUrl = "";
    if (data.image && data.image.length > 0) {
      const imageFile = new FormData();
      imageFile.append("image", data.image[0]);

      try {
        const imageResponse = await axiosPublic.post(
          image_hosting_api,
          imageFile
        );
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

    const courseData = {
      title: data.title,
      level: data.level,
      description: data.description,
      features: data.features
        .map((f) => f.value)
        .filter((val) => val.trim() !== ""),
      technology: data.technology.map((t) => t.name).filter((name) => name.trim() !== ""),
      lessons: parseInt(data.lessons),
      project: parseInt(data.project),
      duration: parseInt(data.duration),
      originalPrice: parseFloat(data.originalPrice),
      discountedPrice: parseFloat(data.discountedPrice),
      instructor: data.instructor,
      category: data.category,
      image: imageUrl,
      status: "active",
    };

    try {
      const response = await axiosPublic.post("/courses", courseData);

      if (response.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} has been added successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Course creation failed:", error);
      Swal.fire({
        icon: "error",
        title: "Course Creation Failed",
        text:
          error.response?.data?.message ||
          "Failed to create course. Please try again.",
      });
    }
  };

  return (
    <div className="w-11/12 mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Add A New Course</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title & Subtitle */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Title */}
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

          {/* Project */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Project*</span>
            </label>
            <input
              type="number"
              {...register("project", { required: true })}
              placeholder="Enter the number of projects"
              className="input input-bordered w-full"
            />
            {errors.project && (
              <span className="text-red-500 text-sm">Subtitle is required</span>
            )}
          </div>
        </div>

        {/* Level & Category */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Level*</span>
            </label>
            <select
              {...register("level", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            {errors.level && (
              <span className="text-red-500 text-sm">Level is required</span>
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
            <span className="text-red-500 text-sm">
              Description is required
            </span>
          )}
        </div>

        {/* Features Section */}
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

        {/* technology Members Section */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Technology you will learn</span>
          </label>
          <div className="space-y-2">
            {techField.map((field, index) => (
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

        {/* Lessons & Instructor */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Number of Lessons*</span>
            </label>
            <input
              type="number"
              {...register("lessons", { required: true, min: 1 })}
              className="input input-bordered w-full"
            />
            {errors.lessons && (
              <span className="text-red-500 text-sm">Enter a valid number</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name*</span>
            </label>
            <input
              type="text"
              {...register("instructor", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.instructor && (
              <span className="text-red-500 text-sm">
                Instructor name is required
              </span>
            )}
          </div>
        </div>

        {/* Prices */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Original Price ($)*</span>
            </label>
            <input
              type="number"
              step="0.01"
              {...register("originalPrice", { required: true, min: 0 })}
              className="input input-bordered w-full"
            />
            {errors.originalPrice && (
              <span className="text-red-500 text-sm">Enter a valid price</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Discounted Price ($)*</span>
            </label>
            <input
              type="number"
              step="0.01"
              {...register("discountedPrice", { required: true, min: 0 })}
              className="input input-bordered w-full"
            />
            {errors.discountedPrice && (
              <span className="text-red-500 text-sm">Enter a valid price</span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Upload */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Course Image*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full"
            />
            {errors.image && (
              <span className="text-red-500 text-sm">Image is required</span>
            )}
          </div>
          {/* Duration */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Duration*</span>
            </label>
            <input
              type="number"
              {...register("duration", { required: true })}
              placeholder="duration"
              className="input input-bordered w-full"
            />
            {errors.subtitle && (
              <span className="text-red-500 text-sm">Duration is required</span>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="form-control mt-8">
          <button type="submit" className="btn btn-primary w-full">
            Add Course <FaPlusCircle className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
