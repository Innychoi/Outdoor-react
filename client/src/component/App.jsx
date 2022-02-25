import React, { useState, useMemo } from 'react';
import Reviews from './reviews/Reviews';
import ReviewModal from './reviews/modal/Modal';
// eslint-disable-next-line import/no-named-as-default
import Related from './related/Related';
import Overview from './overview/Overview';
import AppContext from './AppContext';
import ReviewPhotoModal from './reviews/reviewPhotos/modal/ReviewPhotoModal';
import { Modal } from './related/Modal';
import MyOutfit from './related/MyOutfit';
import { Container, RelatedContainer } from './reviews/Review.styles';

function App() {
  // const [globalProductId, setGlobalProductId] = useState(40344);
  // const [globalProductStyle, setGlobalProductStyle] = useState();
  // const [globalTheRelatedInfo, setGlobalTheRelatedInfo] = useState('hello');
  // const [modalClicked, setModalClicked] = useState(false);
  // const [globalProductInfo, setGlobalProductInfo] = useState(40344);
  // const [globalAverage, setGlobalState] = useState(0);
  // const [currentSize, setCurrentSize] = useState(0);
  // const [currentQuantity, setCurrentQuantity] = useState(0);
  // console.log(globalProductStyle);

  // const productIdSetting = {
  //   productId: globalProductId,
  //   productInfo: globalProductInfo,
  //   productStyle: globalProductStyle,
  //   theRelatedInfo: globalTheRelatedInfo,
  //   modalStatus: modalClicked,
  //   currentSize: currentSize,
  //   currentQuantity: currentQuantity,
  //   setGlobalProductInfo,
  //   setGlobalProductId,
  //   setGlobalProductStyle,
  //   setGlobalTheRelatedInfo,
  //   setModalClicked,
  //   setCurrentSize,
  //   setCurrentQuantity,
  // };

  const [globalProductId, setGlobalProductId] = useState(40344);
  const [globalProductStyle, setGlobalProductStyle] = useState();
  const [globalTheRelatedInfo, setGlobalTheRelatedInfo] = useState('hello');
  const [modalClicked, setModalClicked] = useState(false);
  const [globalProductInfo, setGlobalProductInfo] = useState(40344);
  const [globalAverage, setGlobalAverage] = useState(0);
  const [currentSize, setCurrentSize] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const [modalReviewClicked, setModalReviewClicked] = useState(false);
  const [metaCharacteristics, setMetaCharacteristics] = useState(null);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [photoModal, setPhotoModal] = useState(false);
  const [reviewPhotos, setReviewPhotos] = useState([]);

  // const productIdSetting = {
  //   productId: globalProductId,
  //   productInfo: globalProductInfo,
  //   productStyle: globalProductStyle,
  //   theRelatedInfo: globalTheRelatedInfo,
  //   modalStatus: modalClicked,
  //   currentSize,
  //   currentQuantity,
  //   setGlobalProductInfo,
  //   setGlobalProductId,
  //   setGlobalProductStyle,
  //   setGlobalTheRelatedInfo,
  //   setModalClicked,
  //   setCurrentSize,
  //   setCurrentQuantity,
  // };

  const value = useMemo(() => (
    {
      productId: globalProductId,
      productInfo: globalProductInfo,
      productStyle: globalProductStyle,
      theRelatedInfo: globalTheRelatedInfo,
      modalStatus: modalClicked,
      currentSize,
      currentQuantity,
      modalReviewClicked,
      globalAverage,
      metaCharacteristics,
      reviewSubmitted,
      photoModal,
      reviewPhotos,
      setGlobalProductInfo,
      setGlobalProductId,
      setGlobalProductStyle,
      setGlobalTheRelatedInfo,
      setModalClicked,
      setModalReviewClicked,
      setGlobalAverage,
      setMetaCharacteristics,
      setReviewSubmitted,
      setPhotoModal,
      setReviewPhotos,
      setCurrentSize,
      setCurrentQuantity,
    }
  // eslint-disable-next-line max-len
  ), [globalProductId, globalProductInfo, globalProductStyle, globalTheRelatedInfo, modalClicked, modalReviewClicked, globalAverage, metaCharacteristics, reviewSubmitted, photoModal, reviewPhotos, currentSize,
    currentQuantity]);

  return (
    <div>
      <AppContext.Provider value={value}>
        <Container>
          {modalReviewClicked && <ReviewModal />}
          {photoModal && <ReviewPhotoModal />}
          <Overview />
          <h1 className="recommended">Recommended Products</h1>
          <RelatedContainer>
            <Related />
            {/* <MyOutfit /> */}
          </RelatedContainer>
          <Reviews />
          {modalClicked && (
          <Modal
            imgUrl1={globalProductStyle.photos[0].url}
            imgUrl2={globalTheRelatedInfo.results[3].photos[0].url}
            currentProduct={globalProductInfo}
            comparedProduct={globalTheRelatedInfo}
          />
          )}
        </Container>
      </AppContext.Provider>
    </div>
  );
}

export default App;
