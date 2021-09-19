import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

const bag = () => {
    return (
        <div className="h-almost">
            <div className="flex flex-col items-center gap-5 pt-14">
                <p className="font-semibold text-2xl">Sepete Ekledikleriniz</p>
                <a className="text-primary-color underline">Alışverişe geri gön</a>
            </div>
            <div className="container mx-auto flex">
                <img src="prduct_img/pr1.jpg" alt="" />
                <table className="w-full mt-7">
                    <thead>
                        <tr>
                            <th className="flex justify-start pl-5">Ürün</th>
                            <th>Adet</th>
                            <th>Fiyat</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr className="border-t-2 border-b-2">
                            <td className="flex py-5">
                                <img src="product_img/pr2.jpg" alt="" className="w-24" />
                                <div className="flex flex-col pt-2">
                                    <p className="text-2xl font-semibold mb-7 ml-10">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </td>
                            <td>
                                <p>1</p>
                            </td>
                            <td>
                                <p>1555 TL</p>
                            </td>

                            <td>
                                <RiDeleteBinLine className="text-primary-color text-2xl" />
                            </td>
                        </tr>
                        <tr className="border-t-2 border-b-2">
                            <td className="flex py-5">
                                <img src="product_img/pr1.jpg" alt="" className="w-24" />
                                <div className="flex flex-col pt-2">
                                    <p className="text-2xl font-semibold mb-7 ml-10">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </td>
                            <td>
                                <p>1</p>
                            </td>
                            <td>
                                <p>1555 TL</p>
                            </td>

                            <td>
                                <RiDeleteBinLine className="text-primary-color text-2xl" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container mx-auto flex justify-end">
                <div className="flex items-end gap-5">
                    <p className="font-bold text-xl">Toplam</p>
                    <p className="font-semibold text-xl">1555 TL</p>
                </div>
            <button className="flex items-center gap-3 ml-10 px-10 text-white font-semibold bg-primary-color hover:bg-yellow-700 p-2 rounded-md mt-4 transition ease-out duration-300 ">Satın Al</button>
            </div>
        </div>
    )
}

export default bag
