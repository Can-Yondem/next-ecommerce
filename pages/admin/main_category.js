import PanelLayout from "../../components/PanelLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  get_maincategory,
  delete_maincategory,
  update_maincategory,
} from "../../redux/products/productsSlice";
import { useEffect } from "react";
import PanelMainCategory from "../../components/PanelMainCategory";
import PanelCategoryLayout from "../../components/PanelCategoryLayout";

const main_category = () => {
  const mainCategory = useSelector((state) => state.products.mainCategory);
  const token = useSelector((state) => state.users.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_maincategory());
  }, [dispatch]);

  const deleteCategory = async (mainCategoryId) => {
    await dispatch(delete_maincategory({ id: mainCategoryId, token }));
  };

  const updateCategory = async (id, category) => {
    await dispatch(update_maincategory({ category, id, token }));
  };

  return (
    <PanelLayout>
      <PanelCategoryLayout>
        <div className="bg-white p-4 rounded-md shadow-md">
          <table className="w-full">
            <tr className="border-b-[1px] text-xs font-semibold text-left text-gray-500">
              <th className="w-1/4 py-3">ID</th>
              <th className="w-1/4 py-3">Ana Kategoriler</th>
              <th className="w-1/4 py-3">Kategori Sayısı</th>
              <th className="w-1/4 py-3">Işlemler</th>
            </tr>
            {mainCategory?.map((item, index) => {
              return (
                <tr className="border-b-[1px] text-xs hover:bg-green-50 transition duration-300 ease-out">
                  <PanelMainCategory
                    data={item}
                    deleteCategory={deleteCategory}
                    updateCategory={updateCategory}
                  />
                </tr>
              );
            })}
          </table>
        </div>
      </PanelCategoryLayout>
    </PanelLayout>
  );
};

export default main_category;
