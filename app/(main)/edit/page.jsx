"use client";

import { useState, useRef, useEffect } from "react";
import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";
import Banner from "@/components/banner";
import { IconTrash } from "@tabler/icons-react";
import NumericInput from "react-numeric-input";
import { toast } from "sonner";
import { BaseUrl } from "@/constants/Constants";
import { createProduct, updateProductItem, deleteItemById, findItemById } from "@/lib/services/product";
import spinnerStype from './Spinner.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import withAuth from "@/lib/withAuth";
import Loader from "@/components/loader";

const Select = ({ name, onChange = null, value = "", children }) => {
  return (
    <select className="w-full text-[#e1e1e1] bg-[#0F1535] border border-[#6271c2] rounded-2xl py-1 text-xs cursor-pointer" name={name} onChange={onChange} value={value}>
      {children}
    </select>
  );
};

const PricingRow = ({ no, onSizeChange, onPriceChange, size, price, onDelete }) => {
  return (
    <div className="flex flex-col xs:flex-row gap-x-6 mb-2">
      <div className="flex-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold text-white">Size</p>
            <Select value={size} onChange={(e) => onSizeChange(no, e.target.value)}>
              {[1, 2, 4, 8, 16].map((index) => (
                <option value={index}>{index} ounce</option>
              ))}
            </Select>
          </div>
          <div>
            <p className="text-xs font-bold text-white">Price</p>
            <NumericInput className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs" placeholder="1" min={0} max={99999} precision={0} name={`price${no}`} value={price} onChange={(e) => onPriceChange(no, e)} noStyle strict />
          </div>
        </div>
      </div>
      <div className="flex items-center text-red-500 pt-3 cursor-pointer" onClick={() => onDelete(no)}>
        <IconTrash size={16} strokeWidth={3} />
        <p className="text-sm italic font-bold">DELETE</p>
      </div>
    </div>
  );
};

function Home() {
  const imgRef = useRef(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const itemId = searchParams.get('Id');

  const [draft_types, setdraft_types] = useState(["2 Liter Keg (2L)", "4 Liter Keg (4L)", "5 Liter Keg (5L)", "Half Corny Keg (2.5gal)", "KeyKeg (10L)", "Three Gallon Corny Keg (3.0gal)", "Corny Keg (5gal)", "Sixth Barrel (5.17gal)", "KeyKeg (20L)", "Quarter Barrel (7.75gal)", "Slim Quarter Barrel (7.75gal)", "KeyKeg (30L)", "Conical Fermenter", "10 Gallon Keg (10gal)", "European Half Barrel (50L)", "Half Barrel (15.5gal)", "European Full Barrel (100L)"]);
  const [package_types, setpackage_types] = useState(["", "Can 12oz (single)", "Can 12oz (4-pack)", "Can 12oz (6-pack)", "Can 16oz (single)", "Can 16oz (4-pack)", "Can 19.2oz (single)", "Can 250ml (single)", "Can 250ml (4-pack)", "Can 330ml (single)", "Can 330ml (4-pack)", "Can 330ml (6-pack)", "Can 500ml (single)", "Can 500ml (4-pack)", "Bottle 12oz (single)", "Bottle 12oz (4-pack)", "Bottle 12oz (6-pack)", "Bottle 22oz (single)", "Bottle 22oz (4-pack)", "Bottle 330ml (single)", "Bottle 330ml (4-pack)", "Bottle 330ml (6-pack)", "Bottle 375ml (single)", "Bottle 500ml (single)", "Bottle 500ml (4-pack)", "Bottle 750ml (single)", "Bottle 1L (single)"])
  const [styles, setstyles] = useState(["Pale Ale", "IPA", "NEIPA", "Stout", "Porter", "Lager", "Pilsner", "Wheat Beer", "Saison", "Barley Wine", "Bitter", "Blonde Ale", "Bock", "Dubbel", "Tripel", "Quad", "Lambic", "Gose", "Marzen/Oktoberfest", "Schwarzbier", "Vienna Lager", "Fruit Beer", "Herb and Spiced Beer", "Honey Beer", "Rye Beer", "Smoked Beer", "Vegetable Beer", "Wild Beer", "Wood-aged Beer", "Wine-Red", "Wine-White", "Wine-Rose", "Wine-Sparkling", "Wine-Dessert", "Wine-Fortified", "Mead-Traditional", "Mead-Melomel", "Mead-Cyser", "Mead-Pyment", "Mead-Metheglin", "Cider-Dry", "Cider-Sweet", "Cider-Fruit-flavored", "Cider-Spiced", "Whiskey", "Vodka", "Rum", "Gin", "Tequila", "Brandy", "Liqueurs", "RTD-Whiskey", "RTD-Vodka", "RTD-Rum", "RTD-Gin", "RTD-Tequila", "RTD-Brandy", "RTD-Liqueurs"])

  const [types, setTypes] = useState(draft_types);
  const [pricings, setPricings] = useState([{ size: 1, price: 0 }]);
  const [imgSelected, SetImgSelected] = useState(false);

  const [loading, setLoading] = useState(true);
  const [itemData, setItemData] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const ImageToUrlHandler = async (file) => {
    const formData = new FormData();
    formData.append('Image', file);

    try {
      const response = await fetch(`${BaseUrl}getImageUrl`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setFormFields({
        ...formFields,
        imageUrl: data.imageUrl
      });

      return data;
    } catch (error) {
      console.error('Error posting image:', error);
    }
  };

  const onImageAdd = (e) => {
    const file = e.target.files[0];
    ImageToUrlHandler(file);

    const reader = new FileReader();

    reader.onload = (event) => {
      const imgUrl = event.target.result;
      imgRef.current.src = imgUrl;
      SetImgSelected(true);
    };

    reader.readAsDataURL(file);
  };

  const onImageRemove = () => {
    imgRef.current.src = "https://via.placeholder.com/350x450";
    SetImgSelected(false);
    setFormFields({ ...formFields, imageUrl: "" });
  };

  const GetItemDetailById = async (id) => {
    setLoading(true);
    try {
      const response = await findItemById({ _id: id });
      console.log(response);
      if (response.data.status === 200) {
        setItemData(response.data.record);
      } else {
        toast.error("Failed to fetch item details");
      }
    } catch (error) {
      console.error("Error fetching item details:", error);
      toast.error("Error fetching item details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (itemId) {
      setIsUpdate(true);
      GetItemDetailById(itemId);
    } else {
      setIsUpdate(false);
      setLoading(false);
    }
  }, [itemId]);

  useEffect(() => {
    if (itemData) {
      setFormFields({
        ...formFields,
        productName: itemData?.productName,
        abv: itemData?.abv,
        category: itemData?.category,
        description: itemData?.description,
        type: itemData?.type,
        style: itemData?.style,
        producer: itemData?.producer,
        quantity: itemData?.quantity,
        imageUrl: itemData.imageUrl
      });
      setPricings(itemData.pricintList);
      SetImgSelected(true);

      if (itemData.category === "draft") {
        setdraft_types(shiftValueToZero(draft_types, itemData?.type));
        setstyles(shiftValueToZero(styles, itemData?.style));
      } else {
        setpackage_types(shiftValueToZero(package_types, itemData?.type));
      }
    }
  }, [itemData]);

  const onCategoryChange = (e) => {
    if (e.target.value === "draft") {
      setTypes(draft_types);
    } else {
      setTypes(package_types);
    }
  };

  const onAdd = () => {
    setPricings([...pricings, { size: 1, price: 0 }]);
  };

  const onRemove = (id) => {
    setPricings((pricings) => pricings.filter((price, index) => index !== id));
  };

  const onPriceChange = (id, value) => {
    let newPricings = [...pricings];
    newPricings[id].price = value;
    setPricings(newPricings);
  };

  const onSizeChange = (id, value) => {
    let newPricings = [...pricings];
    newPricings[id].size = value;
    setPricings(newPricings);
  };

  const onSave = async () => {
    if (formFields.productName === "") {
      toast.warning("Product name is mandatory");
      return;
    } else if (formFields.abv === "") {
      toast.warning("ABV is mandatory");
      return;
    } else if (formFields.category === "") {
      toast.warning("Category is mandatory");
      return;
    } else if (formFields.description === "") {
      toast.warning("Description is mandatory");
      return;
    } else if (formFields.type === "") {
      toast.warning("Type is mandatory");
      return;
    } else if (formFields.producer === "") {
      toast.warning("Producer is mandatory");
      return;
    } else if (formFields.quantity === "") {
      toast.warning("Quantity is mandatory");
      return;
    } else if (pricings.length === 0) {
      toast.warning("Pricings is mandatory");
      return;
    } else {
      const productData = {
        productName: formFields.productName,
        abv: formFields.abv,
        category: formFields.category,
        description: formFields.description,
        type: formFields.type,
        style: formFields.style,
        producer: formFields.producer,
        quantity: Number(formFields.quantity),
        pricintList: pricings,
        imageUrl: formFields.imageUrl
      };

      try {
        const response = await createProduct(productData);
        if (response.data.status === "success") {
          toast.success("Product Created Successfully");
          setFormFields({
            userId: "",
            productName: "",
            abv: "",
            category: "draft",
            description: "",
            type: "",
            style: "",
            producer: "",
            quantity: 1,
            imageUrl: ""
          });
          setPricings([{ size: 1, price: 0 }]);
          onImageRemove();
          router.push(`/${formFields.category.toLowerCase()}`);
        } else {
          toast.error("Failed to create product");
        }
      } catch (error) {
        console.error("Error creating product:", error);
        toast.error("Error creating product");
      }
    }
  };

  const onUpdate = async () => {
    if (formFields.productName === "") {
      toast.warning("Product name is mandatory");
      return;
    } else if (formFields.abv === "") {
      toast.warning("ABV is mandatory");
      return;
    } else if (formFields.category === "") {
      toast.warning("Category is mandatory");
      return;
    } else if (formFields.description === "") {
      toast.warning("Description is mandatory");
      return;
    } else if (formFields.type === "") {
      toast.warning("Type is mandatory");
      return;
    } else if (formFields.producer === "") {
      toast.warning("Producer is mandatory");
      return;
    } else if (formFields.quantity === "") {
      toast.warning("Quantity is mandatory");
      return;
    } else if (pricings.length === 0) {
      toast.warning("Pricings is mandatory");
      return;
    } else {
      const productData = {
        _id: itemData?._id,
        updates: {
          productName: formFields.productName,
          abv: formFields.abv,
          category: formFields.category,
          description: formFields.description,
          type: formFields.type,
          style: formFields.style,
          producer: formFields.producer,
          quantity: Number(formFields.quantity),
          pricintList: pricings,
          imageUrl: formFields.imageUrl
        }
      };

      try {
        const response = await updateProductItem(productData);
        if (response.data.status === "success") {
          toast.success("Item Updated Successfully");
          console.log("it actually worked fr" );
          router.push(`/${formFields.category.toLowerCase()}`);
        } else {
          toast.error("Failed to update product");
        }
      } catch (error) {
        console.error("Error updating product:", error);
        toast.error("Error updating product");
      }
    }
  };

  const DeleteItemHandler = async (id) => {
    try {
      const response = await deleteItemById({ _id: id });
      if (response.data.status === "success") {
        toast.success("Item Deleted Successfully");
        router.push(`/${formFields.category.toLowerCase()}`);
      } else {
        toast.error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Error deleting item");
    }
  };

  const [formFields, setFormFields] = useState({
    userId: "",
    productName: "",
    abv: "",
    category: "draft",
    description: "",
    type: "",
    style: "",
    producer: "",
    quantity: 1,
    imageUrl: ""
  });

  function shiftValueToZero(list, value) {
    const index = list.indexOf(value); // Get the index of the value in the list
    if (index !== -1) { // If value exists in the list
      list.splice(index, 1); // Remove the value from its current index
      list.unshift(value); // Add the value to the beginning of the list
    }
    return list;
  }

  return (
    <div className="main-container">
      {loading && <Loader />}
      {!loading && (
        <>
          <SideMenu />
          <div className="overflow-hidden">
            <TopNavbar />
            <MainContent>
              <div className="container">
                <Banner bgImgSrc="/images/item1.jpg" title="Brazil Loves New England" />
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  <div className="col-span-2">
                    <div className="bg-[#060B28] rounded-[20px] px-8 py-4 h-[600px] overflow-y-auto">
                      <p className="text-lg font-bold text-white mb-4">Product Image</p>
                      <img src={formFields.imageUrl ? formFields.imageUrl : "https://via.placeholder.com/350x450"} alt="item" className="w-full mb-4" ref={imgRef} />
                      <div className="flex justify-center gap-4 text-[10px] text-[#0F1535] font-black">
                        <label htmlFor="uploadImg" className="bg-white rounded-lg w-[100px] h-7 grid place-items-center cursor-pointer">
                          ADD
                        </label>
                        <input type="file" id="uploadImg" className="opacity-0 absolute -z-10" onChange={onImageAdd} />
                        <div className="bg-white rounded-lg w-[100px] h-7 grid place-items-center cursor-pointer" onClick={onImageRemove}>
                          REMOVE
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 md:col-span-3 grid gap-4">
                    <form className="bg-[#060B28] rounded-[20px] px-4 py-2 h-[285px] overflow-y-auto">
                      <p className="text-lg font-bold text-white mb-2">Product Information</p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
                        <div className="sm:col-span-2">
                          <p className="text-xs font-bold">Product Name</p>
                          <input
                            value={formFields.productName}
                            onChange={(e) => setFormFields({ ...formFields, productName: e.target.value })}
                            className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs"
                            name="pname"
                            placeholder="Brazil Loves New England"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold">ABV</p>
                          <NumericInput
                            value={formFields.abv}
                            onChange={(value) => setFormFields({ ...formFields, abv: value })}
                            className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2"
                            placeholder="5.8"
                            min={0}
                            precision={1}
                            name="pabv"
                            noStyle
                            strict
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold">Category</p>
                          <Select name="pcategory" value={formFields.category} onChange={(e) => setFormFields({ ...formFields, category: e.target.value })}>
                            <option value="draft">draft</option>
                            <option value="package">package</option>
                          </Select>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4 mb-2">
                        <div className="flex flex-col">
                          <p className="text-xs font-bold">Description</p>
                          <textarea
                            value={formFields.description}
                            onChange={(e) => setFormFields({ ...formFields, description: e.target.value })}
                            className="w-full flex-auto text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs resize-none"
                            name="pdescription"
                            placeholder="Some initial Bold text"
                          ></textarea>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Type</p>
                          <Select name="ptype" value={formFields.type} onChange={(e) => setFormFields({ ...formFields, type: e.target.value })}>
                            {types.map((type) => (
                              <option value={type}>{type}</option>
                            ))}
                          </Select>
                          <p className="text-xs font-bold">Style</p>
                          <Select name="pstyle" value={formFields.style} onChange={(e) => setFormFields({ ...formFields, style: e.target.value })}>
                            {styles.map((style) => (
                              <option value={style}>{style}</option>
                            ))}
                          </Select>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-bold">Producer</p>
                          <input
                            value={formFields.producer}
                            onChange={(e) => setFormFields({ ...formFields, producer: e.target.value })}
                            className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs"
                            name="pproducer"
                            placeholder="Ellipsis Brewing"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold">Quantity</p>
                          <NumericInput
                            value={formFields.quantity}
                            onChange={(value) => setFormFields({ ...formFields, quantity: value })}
                            className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2"
                            placeholder="1"
                            min={1}
                            max={999}
                            precision={0}
                            name="pquantity"
                            noStyle
                            strict
                          />
                        </div>
                      </div>
                    </form>
                    <div className="bg-[#060B28] rounded-[20px] px-8 py-4 h-[300px] overflow-y-auto">
                      <p className="text-lg font-bold text-white mb-2">Pricing</p>
                      {pricings.map((pricing, index) => (
                        <PricingRow key={index} no={index} onSizeChange={onSizeChange} onPriceChange={onPriceChange} size={pricing.size} price={pricing.price} onDelete={onRemove} />
                      ))}
                      <div className="bg-white rounded-full w-[74px] h-7 grid place-items-center text-[10px] text-[#0F1535] font-black cursor-pointer" onClick={onAdd}>
                        ADD
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8 text-xs text-[#0F1535] font-bold">
                  <div
                    className="bg-white rounded-xl h-9 grid place-items-center cursor-pointer"
                    onClick={() => {
                      if (!loading) {
                        if (isUpdate) {
                          onUpdate();
                        } else {
                          onSave();
                        }
                      }
                    }}
                  >
                    {loading ? <div className={spinnerStype.spinner}></div> : "SAVE"}
                  </div>
                  {isUpdate && (
                    <div
                      className="bg-white rounded-xl h-9 grid place-items-center cursor-pointer"
                      onClick={() => {
                        DeleteItemHandler(itemData?._id);
                      }}
                    >
                      DELETE
                    </div>
                  )}
                </div>
              </div>
            </MainContent>
          </div>
        </>
      )}
    </div>
  );
}

export default withAuth(Home);
