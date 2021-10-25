import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector, useDispatch } from "react-redux";
import { get_subcategory, add_product} from "../../redux/products/productsSlice";

const ProductsModal = () => {
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
  },[dispatch])

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
      dispatch(add_product({...productValues,token}));
  }

  return (
    <form onSubmit={productSubmit} className="bg-white p-10">
      <p className="text-2xl font-bold border-b-2">Ürün Ekle</p>
      <div className="">
        <div>
          <p>Ürün Adı</p>
          <input
            type="text"
            name="name"
            className="border-2"
            onChange={change}
          />
          <div>
            <p>Ürün Açıklaması</p>
            <input
              type="text"
              name="desc"
              className="border-2"
              onChange={change}
            />
          </div>
          <div>
            <p>Ürün Markası</p>
            <input
              type="text"
              name="tradeMark"
              className="border-2"
              onChange={change}
            />
          </div>
        </div>
        <div>
          <p>Fiyat</p>
          <input
            type="number"
            name="price"
            className="border-2"
            onChange={change}
          />
        </div>
        <div>
          <p>Ürün Stoğu</p>
          <input
            type="number"
            name="stock"
            className="border-2"
            onChange={change}
          />
        </div>
        <div>
            <select name="subCategory" onChange={change}>
                <option value="">Alt Kategori Seç</option>
                {subCategory?.map(item => {
                    return(
                        <option value={item.id} >{item.sub_category}</option>
                    )
                })}
            </select>
        </div>
        <div
          className="border-2 border-dashed flex justify-center items-center cursor-pointer"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <p>Fotoğrafınızı buraya bırakın.</p>
        </div>
      </div>
      <button type="submit">Ürün Ekle</button>
    </form>
  );
};

export default ProductsModal;
