import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_maincategory,
  add_category,
  get_maincategory,
  get_category,
  add_subcategory,
} from "../../redux/products/productsSlice";

const AddCategoryModal = () => {
  const mainCategory = useSelector((state) => state.products.mainCategory);
  const category = useSelector((state) => state.products.category);
  const [mainCategoryState, setMainCategoryState] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const [subCategoryState, setSubCategoryState] = useState("");
  const [mainCategorySelect, setMainCategorySelect] = useState("");
  const [subCategorySelect, setSubCategorySelect] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.users.token);

  useEffect(() => {
    dispatch(get_maincategory());
    dispatch(get_category());
  }, [dispatch]);

  const addCategory = async (mainCategoryName) => {
    await dispatch(add_maincategory({ mainCategoryName, token }));
    setMainCategoryState("");
  };

  const addProductCategory = ({ categoryState, subCategorySelect }) => {
    dispatch(
      add_category({ name: categoryState, id: subCategorySelect, token })
    );
  };

  const addSubCategory = ({ categoryState, subCategorySelect }) => {
    dispatch(
      add_subcategory({ name: categoryState, id: subCategorySelect, token })
    );
  };


  return (
    <div className="w-[600px] h-[300px] bg-white rounded-xl shadow-md p-5">
      <p>Ana Kategori</p>
      <div className="flex">
        <input
          type="text"
          className="border-2 mr-2 text-black"
          placeholder="Kategori ekle"
          value={mainCategoryState}
          onChange={(e) => setMainCategoryState(e.target.value)}
        />
        <button
          className="w-8 h-8 bg-blue-700 rounded-full flex justify-center items-center cursor-pointer text-white"
          onClick={() => addCategory(mainCategoryState)}
        >
          +
        </button>
      </div>
      <p className="">Ürün kategorisi</p>
      <div className="flex gap-4 mt-4">
        <input
          type="text"
          placeholder="Kategori Ekle"
          className="border-2"
          onChange={(e) => setCategoryState(e.target.value)}
          value={categoryState}
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
          className="w-8 h-8 bg-blue-700 rounded-full flex justify-center items-center cursor-pointer text-white"
          onClick={() =>
            addProductCategory({ categoryState, mainCategorySelect })
          }
        >
          +
        </button>
      </div>
          <p>Alt Kategori</p>
      <div className="flex gap-4 mt-4">
            <input
              type="text"
              placeholder="Kategori Ekle"
              className="border-2"
              onChange={(e) => setSubCategoryState(e.target.value)}
              value={categoryState}
            />
            <select
              name="sub_category"
              id="sub_category"
              onChange={(e) => setSubCategorySelect(e.target.value)}
            >
              <option value="">Kategori Seçin</option>
              {category?.map((item) => {
                return <option value={item.id}>{item.categoryName}</option>;
              })}
            </select>
            <button
              className="w-8 h-8 bg-blue-700 rounded-full flex justify-center items-center cursor-pointer text-white"
              onClick={() => addSubCategory({ subCategoryState, subCategorySelect })}
            >
              +
            </button>
          </div>
    </div>
  );
};

export default AddCategoryModal;
