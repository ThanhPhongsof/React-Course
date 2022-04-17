import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const fakeData = [
  {
    id: 1,
    url: "https://cdn.dribbble.com/users/1200499/screenshots/15374315/media/e406ea16d14e45f0a4d7385b27c6c0a0.jpg?compress=1&resize=800x600&vertical=top",
    isLike: false,
  },
  {
    id: 2,
    url: "https://cdn.dribbble.com/users/1200499/screenshots/15211051/media/7c0c758bcc868fbaebd06e37e7003c47.jpg?compress=1&resize=800x600&vertical=top",
    isLike: false,
  },
  {
    id: 3,
    url: "https://cdn.dribbble.com/users/1200499/screenshots/15034986/media/8de7d1748dc58683d56471f1ecfcc82d.jpg?compress=1&resize=1200x900&vertical=top",
    isLike: true,
  },
  {
    id: 4,
    url: "https://cdn.dribbble.com/users/1200499/screenshots/15248351/media/44bc610c01d19767e9c718c40e4789e3.jpg?compress=1&resize=800x600&vertical=top",
    isLike: false,
  },
  {
    id: 5,
    url: "https://cdn.dribbble.com/users/1200499/screenshots/15196097/media/7662ddbbc90a60dfb9ea2ae29e1ba900.jpg?compress=1&resize=800x600&vertical=top",
    isLike: false,
  },
  {
    id: 6,
    url: "https://cdn.dribbble.com/users/1200499/screenshots/15273151/media/dfa820fb4f5f4807ab751d3d258bad4b.jpg?compress=1&resize=800x600&vertical=top",
    isLike: false,
  },
];

const GalleryContext = createContext();
const GalleryProvider = (props) => {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage(
    "cartItems",
    []
  );
  const [photos, setPhotos] = useState(storedValue);
  const [cardItems, setCardItems] = useState(storedCart);
  const [likeList, setLikeList] = useState([]);

  const toggleLike = (photoId) => {
    const updatedArray = photos.map((photo) => {
      if (photo.id == photoId) {
        return { ...photo, isLike: !photo.isLike };
      }
      return photo;
    });
    setPhotos(updatedArray);
    setValue(updatedArray);
  };

  // 1. Viết function addToCart
  // 2. Function addToCart truyền params là photo
  const addToCart = (newItem) => {
    // 3. Cập nhật lại state giỏ hàng (cartItems)
    setCardItems((prevItems) => {
      // 4. Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
      const isExist = prevItems.some((item) => item.id == newItem.id);
      // 5. Nếu tồn tại thì trả về danh sách trước đó
      if (isExist) {
        setStoredCart([...prevItems]);
        return [...prevItems];
      }
      // 6. Chưa tồn tại thì thêm mới vào giỏ hàng
      setStoredCart([...prevItems, newItem]);
      return [...prevItems, newItem];
    });
  };

  const removeToCart = (photoId) => {
    setCardItems((prevItems) => {
      const result = prevItems.filter((item) => item.id !== photoId);
      setStoredCart(result);
      return result;
    });
  };

  const value = {
    photos,
    cardItems,
    likeList,
    setLikeList,
    setPhotos,
    setCardItems,
    toggleLike,
    addToCart,
    removeToCart,
  };

  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
};

const useGallery = () => {
  const context = useContext(GalleryContext);
  if (typeof context == "undefined")
    throw new Error("useGallery must be used within a GalleryContext");
  return context;
};

export { GalleryProvider, useGallery };
