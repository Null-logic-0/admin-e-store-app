"use client";
import DeleteConfirmationModal from "@/components/ui/DeleteConfirmationModal";
import { DeleteIcon, EditIcon } from "@/components/icons";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import Empty from "@/components/ui/Empty";
import { DeleteProductType } from "@/actions/productTypeAction";

export default function ProductsType({ products }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const handleDelete = async () => {
    await DeleteProductType(selectedId);
    setIsDeleteModalOpen(false);
    setSelectedId(undefined);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-semibold text-3xl p-2"> Product Management </h1>
        <button>
          <Link href="/product-type/add" className="custom-primary-btn">
            Add Product Type
          </Link>
        </button>
      </div>

      <hr className="my-5" />

      <div className="mt-20">
        <table className="custom-table">
          <thead className="border-y-2 border-gray-400">
            <tr>
              <th> Sr. No.</th>
              <th>Product Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 font-medium text-lg text-center">
            {products.map((product, key) => (
              <tr key={product.id}>
                <td>{key + 1}</td>
                <td>{product.name}</td>
                <td className="flex items-center gap-3">
                  <Link
                    href={`/product-type/edit/${product.id}`}
                    className="w-fit"
                  >
                    <EditIcon />
                  </Link>
                  <Button
                    className="bg-transparent p-0 px-2 border-none text-red-500"
                    onClick={() => {
                      setIsDeleteModalOpen(true);
                      setSelectedId(product.id);
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Empty data={products} />

        {isDeleteModalOpen && (
          <DeleteConfirmationModal
            setIsOpen={setIsDeleteModalOpen}
            onCancel={() => setIsDeleteModalOpen(false)}
            handleConfirm={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
