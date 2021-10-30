import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_maincategory,
  add_category,
  get_maincategory,
  get_category,
  add_subcategory,
} from "../../redux/products/productsSlice";
import { AiOutlineClose } from 'react-icons/ai';

const AddCategoryModal = ({toggle, setToggle}) => {
  const mainCategory = useSelector((state) => state.products.mainCategory);
  const category = useSelector((state) => state.products.category);
  const [mainCategoryState, setMainCategoryState] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const [subCategoryState, setSubCategoryState] = useState("");
  const [mainCategorySelect, setMainCategorySelect] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
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

  const addProductCategory = ({ categoryState, mainCategorySelect }) => {
    dispatch(
      add_category({ name: categoryState, id: mainCategorySelect, token })
    );
  };

  const addSubCategory = ({ subCategoryState, categorySelect }) => {
    dispatch(
      add_subcategory({ name: subCategoryState, id: categorySelect, token })
    );
  };

  return (
    <div className="w-[600px] h-[400px] bg-white rounded-xl shadow-md p-5">
      <div className="flex justify-end">
        <i className="cursor-pointer" onClick={() => setToggle(!toggle)}><AiOutlineClose/></i>
      </div>
      <p className="font-semibold border-b-2 mb-3">Ana Kategori</p>
      <div className="flex mb-5">
        <input
          type="text"
          className="border-2 mr-2 text-black pl-3 py-2"
          placeholder="Kategori ekle"
          value={mainCategoryState}
          onChange={(e) => setMainCategoryState(e.target.value)}
        />
        <button
          className="w-8 h-8 bg-green-500 rounded-full flex justify-center items-center cursor-pointer text-white"
          onClick={() => addCategory(mainCategoryState)}
        >
          +
        </button>
      </div>
      <p className="font-semibold border-b-2 mb-3">Ürün kategorisi</p>
      <div className="flex gap-4 mb-5">
        <input
          type="text"
          placeholder="Kategori Ekle"
          className="border-2 pl-3 py-2"
          onChange={(e) => setCategoryState(e.target.value)}
          value={categoryState}
        />
        <select
          name="main_category"
          id="main_category"
          className="bg-white border-2 py-2"
          onChange={(e) => setMainCategorySelect(e.target.value)}
        >
          <option value="">Ana kategori Seçin</option>
          {mainCategory?.map((item) => {
            return <option className="block" value={item.id}>{item.main_category}</option>;
          })}
        </select>
        <button
          className="w-8 h-8 bg-green-500 rounded-full flex justify-center items-center cursor-pointer text-white"
          onClick={() =>
            addProductCategory({ categoryState, mainCategorySelect })
          }
        >
          +
        </button>
      </div>
      <p className="font-semibold border-b-2 mb-3">Alt Kategori</p>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Kategori Ekle"
          className="border-2 pl-3 py-2"
          onChange={(e) => setSubCategoryState(e.target.value)}
          value={subCategoryState}
        />
        <select
          name="sub_category"
          id="sub_category"
          onChange={(e) => setCategorySelect(e.target.value)}
          className="bg-white border-2 w-48 py-2"
        >
          <option value="">Ürün Kategorisi Seçin</option>
          {category?.map((item) => {
            return <option value={item.id}>{item.categoryName}</option>;
          })}
        </select>
        <button
          className="w-8 h-8 bg-green-500 rounded-full flex justify-center items-center cursor-pointer text-white"
          onClick={() =>
            addSubCategory({ subCategoryState, categorySelect })
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AddCategoryModal;
