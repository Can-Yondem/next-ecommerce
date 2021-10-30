import PanelLayout from "../../components/PanelLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  get_category,
  delete_category,
  update_category,
  get_maincategory,
} from "../../redux/products/productsSlice";
import { useEffect } from "react";
import PanelCategory from "../../components/PanelCategory";
import PanelCategoryLayout from "../../components/PanelCategoryLayout";

const product_category = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.products.category);
  const token = useSelector((state) => state.users.token);
  const mainCategory = useSelector((state) => state.products.mainCategory);

  useEffect(() => {
    dispatch(get_category());
    dispatch(get_maincategory());
  }, [dispatch]);


  const deleteCategory = (categoryId) => {
    dispatch(delete_category({ id: categoryId, token }));
  };

  const updateCategory = (id, category, main_category) => {
    dispatch(update_category({ id, category, main_category, token }));
  };

  return (
    <PanelLayout>
      <PanelCategoryLayout>
      <div className="bg-white p-4 rounded-md shadow-md">
          <table className="w-full">
            <tr className="border-b-[1px] text-xs font-semibold text-left text-gray-500">
              <th className="w-1/3 py-3">Kategori</th>
              <th className="w-1/3 py-3">Ana Kategori</th>
              <th className="w-1/3 py-3">Işlemler</th>
            </tr>
            {category?.map((item) => (
              <tr className="border-b-[1px] text-xs hover:bg-green-50 transition duration-300 ease-out">
                <PanelCategory
                  data={item}
                  deleteCategory={deleteCategory}
                  updateCategory={updateCategory}
                  mainCategory={mainCategory}
                />
              </tr>
            ))}
          </table>
        </div>
      </PanelCategoryLayout>
    </PanelLayout>
  );
};

export default product_category;
