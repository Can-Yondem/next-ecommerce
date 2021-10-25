import { useState } from "react";

const PanelMainCategory = ({ data, deleteCategory, updateCategory }) => {
  const [toggle, setToggle] = useState(false);
  const [category, setCategory] = useState(data.main_category);
  const id = data.id;

  const submitUpdate = async (id, category) => {
    await updateCategory(id, category);
    setCategory("");
  };
  return (
    <>
      <td className="py-3">{data.id}</td>
      <td className="py-3">
          {toggle ? (
            <>
              <input
                className="text-black rounded-md outline-none border-2"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <button
                className="bg-blue-700 text-white text-sm p-2 ml-3 rounded-md"
                onClick={() => submitUpdate(id, category)}
              >
                Güncelle
              </button>
            </>
          ):<p>{data.main_category}</p>}
      </td>
      <td className="py-3">{data.categories?.length}</td>
      <td className="text-xl py-3">
        <button className="bg-red-600 text-sm py-1 px-3 text-white rounded-md mr-3" onClick={() => deleteCategory(data.id)}>
          Sil
        </button>
        <button className="bg-green-500 text-sm py-1 px-3 text-white rounded-md" onClick={() => setToggle(!toggle)}>
          Güncelle
        </button>
      </td>
    </>
  );
};

export default PanelMainCategory;
