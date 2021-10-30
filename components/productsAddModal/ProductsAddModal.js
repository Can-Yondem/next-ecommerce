import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector, useDispatch } from "react-redux";
import {
  get_subcategory,
  add_product,
  upload_image,
} from "../../redux/products/productsSlice";
import { AiOutlineClose } from "react-icons/ai";

const ProductsModal = ({ productToggle, setProductToggle }) => {
  const [files, setFiles] = useState([]);
  const [productValues, setProductValues] = useState({
    name: "",
    desc: "",
    tradeMark: "",
    price: "",
    stock: "",
    subCategory: "",
  });
  const dispatch = useDispatch();
  const subCategory = useSelector((state) => state.products.subcategory);
  const token = useSelector((state) => state.users.token);

  useEffect(() => {
    dispatch(get_subcategory());
  }, [dispatch]);

  const change = (e) => {
    const { name, value } = e.target;
    setProductValues({
      ...productValues,
      [name]: value,
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".jpeg, .png, .jpg",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    multiple: false,
  });

  const productSubmit = (e) => {
    e.preventDefault();
    //dispatch(add_product({ ...productValues, files, token }));
    dispatch(upload_image({ files, token }));
  };

  return (
    <div className="w-[800px] h-[600px] border-2 bg-white p-10">
      <div className="flex justify-between">
        <p className="text-2xl mb-5">Ürün Ekle</p>
        <i
          className="cursor-pointer"
          onClick={() => setProductToggle(!productToggle)}
        >
          <AiOutlineClose />
        </i>
      </div>

      <div className="flex w-[715px] h-[200px] gap-5">
        <img className="w-2/6 object-scale-down" src={files[0]?.preview} />
      </div>
      <form onSubmit={productSubmit}>
        <div
          className="border-2 border-dashed flex justify-center items-center cursor-pointer w-4/6"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <p>Fotoğrafınızı buraya bırakın.</p>
        </div>
        <div className="flex mt-5">
          <div className="w-1/2 pr-5">
            <div className="flex flex-col mb-2">
              <label for="name">Ürün Adı</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 py-1"
                onChange={change}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label for="desc">Ürün Açıklaması</label>
              <input
                type="text"
                name="desc"
                id="desc"
                className="border-2 py-1"
                onChange={change}
              />
            </div>
            <div className="flex flex-col">
              <label for="trademark">Ürün Markası</label>
              <input
                type="text"
                name="tradeMark"
                id="trademark"
                className="border-2 py-1"
                onChange={change}
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col mb-2">
              <label for="price">Fiyat</label>
              <input
                type="number"
                name="price"
                id="price"
                className="border-2 py-1"
                onChange={change}
                min="0"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label for="stock">Ürün Stoğu</label>
              <input
                type="number"
                name="stock"
                id="stock"
                className="border-2 py-1"
                onChange={change}
                min="0"
              />
            </div>
            <div className="flex flex-col">
              <label>Alt Kategori</label>
              <select
                name="subCategory"
                onChange={change}
                className="bg-white border-2 w-48 py-2"
              >
                <option value="">Alt Kategori Seç</option>
                {subCategory?.map((item) => {
                  return <option value={item.id}>{item.sub_category}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-5 py-2 mt-3 rounded-md text-sm"
        >
          Ürün Ekle
        </button>
      </form>
      <form onSubmit={productSubmit}>
        <input
          type="file"
          name="files"
          onChange={(e) => setFiles(e.target.files[0])}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductsModal;
