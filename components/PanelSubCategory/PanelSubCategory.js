import { useState } from "react";

const PanelSubCategory = ({
  data,
  deleteCategory,
  updateCategory,
  category,
}) => {
  const [toggle, setToggle] = useState(false);
  const [subCategory, setSubCategory] = useState(data.sub_category);
  const [categorySelect, setCategorySelect] = useState("");
  const id = data.id;

  const submitUpdate = async (id, category, main_category) => {
    await updateCategory(id, category, main_category);
    setSubCategory("");
    setToggle(false);
  };

  return (
    <>
      <td className="py-3">
        {toggle ? (
          <input
            className="text-black rounded-md outline-none border-2"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          />
        ) : (
          data.sub_category
        )}
      </td>
      <td className="py-3">
        {toggle ? (
          <>
            <select
              name="category"
              id="category"
              className="bg-white border-2 w-48 py-2"
              onChange={(e) => setCategorySelect(e.target.value)}
            >
              <option value="">Ana kategori Seçin</option>
              {category?.map((item) => {
                return <option value={item.id}>{item.categoryName}</option>;
              })}
            </select>{" "}
            <button
              className="bg-blue-700 text-white text-sm p-2 ml-3 rounded-md"
              onClick={() => submitUpdate(id, subCategory, categorySelect)}
            >
              Güncelle
            </button>
          </>
        ) : (
          data.category?.categoryName
        )}
      </td>
      <td className="text-xl py-3">
        <button
          className="bg-red-600 text-sm py-1 px-3 text-white rounded-md mr-3"
          onClick={() => deleteCategory(data.id)}
        >
          Sil
        </button>
        <button
          className="bg-green-500 text-sm py-1 px-3 text-white rounded-md"
          onClick={() => setToggle(!toggle)}
        >
          Güncelle
        </button>
      </td>
    </>
  );
};

export default PanelSubCategory;
