import { useState } from "react";

const PanelCategory = ({
  data,
  deleteCategory,
  updateCategory,
  mainCategory,
}) => {
  const [toggle, setToggle] = useState(false);
  const [category, setCategory] = useState(data.categoryName);
  const [mainCategorySelect, setMainCategorySelect] = useState("");
  const id = data.id;

  const submitUpdate = async (id, category, main_category) => {
    await updateCategory(id, category, main_category);
    setCategory("");
  };
  return (
    <>
      <td className="py-3">{data.categoryName}</td>
      <td className="py-3">{data.main_category?.main_category}</td>
      <td className="text-xl py-3">
        <button className="bg-red-600 text-sm py-1 px-3 text-white rounded-md mr-3" onClick={() => deleteCategory(data.id)}>
          Sil
        </button>
        <button className="bg-green-500 text-sm py-1 px-3 text-white rounded-md" onClick={() => setToggle(!toggle)}>
          Güncelle
        </button>
      </td>

      {toggle && (
        <>
          <input
            className="text-black rounded-md outline-none border-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <select
            name="main_category"
            id="main_category"
            onChange={(e) => setMainCategorySelect(e.target.value)}
          >
            <option value="">Ana kategori Seçin</option>
            {mainCategory?.map((item) => {
              return <option value={item.id}>{item.main_category}</option>;
            })}
          </select>
          <button
            className="bg-blue-700 text-white text-sm p-2 ml-3 rounded-md"
            onClick={() => submitUpdate(id, category, mainCategorySelect)}
          >
            Güncelle
          </button>
        </>
      )}
    </>
  );
};

export default PanelCategory;
