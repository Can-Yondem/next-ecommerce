import PanelLayout from "../../components/PanelLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  get_subcategory,
  delete_subcategory,
  update_subcategory,
} from "../../redux/products/productsSlice";
import { useEffect, useState } from "react";
import PanelSubCategory from "../../components/PanelSubCategory";
import PanelCategoryLayout from "../../components/PanelCategoryLayout";

const sub_category = () => {
  const dispatch = useDispatch();
  const subCategory = useSelector((state) => state.products.subcategory);
  const category = useSelector((state) => state.products.category);
  const token = useSelector((state) => state.users.token);

  useEffect(() => {
    dispatch(get_subcategory());
  }, [dispatch]);

  const deleteCategory = (categoryId) => {
    dispatch(delete_subcategory({ id: categoryId, token }));
  };

  const updateCategory = (id, sub_category, category) => {
    dispatch(update_subcategory({ id, sub_category, category, token }));
  };

  return (
    <PanelLayout>
      <PanelCategoryLayout>
        <div className="bg-white p-4 rounded-md shadow-md">
          <table className="w-full">
            <tr className="border-b-[1px] text-xs font-semibold text-left text-gray-500">
              <th className="w-1/3 py-3">Alt Kategori</th>
              <th className="w-1/3 py-3">Kategori</th>
              <th className="w-1/3 py-3">Işlemler</th>
            </tr>
            {subCategory?.map((item) => (
              <tr className="border-b-[1px] text-xs hover:bg-green-50 transition duration-300 ease-out">
                <PanelSubCategory
                  data={item}
                  deleteCategory={deleteCategory}
                  updateCategory={updateCategory}
                  category={category}
                />
              </tr>
            ))}
          </table>
        </div>
      </PanelCategoryLayout>
    </PanelLayout>
  );
};

export default sub_category;
