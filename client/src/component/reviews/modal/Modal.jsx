import React, { useState, useContext } from 'react';
import axios from 'axios';
import AddReview from './AddReview';
import Carousel from './carousel/Carousel';
import AppContext from '../../AppContext';
import Characteristics from './RatingChars';

// eslint-disable-next-line react/prop-types
function ReviewModal() {
  const {
    productId, modalReviewClicked, setModalReviewClicked, metaCharacteristics, setReviewSubmitted,
  } = useContext(AppContext);

  const [input, setInput] = useState({
    product_id: productId, name: '', body: '', summary: '', email: '', rating: 1, photos: [], recommend: false, characteristics: {},
  });

  function sendPost() {
    console.log(input);
    axios.post('/reviews', input)
      .then((res) => {
        console.log('post succress');
        setModalReviewClicked((initial) => !initial);
        setReviewSubmitted((initial) => !initial);
      })
      .catch((err) => {
        console.log('err on post!');
      });
  }

  return (
    <Carousel toggle={setModalReviewClicked}>
      <Characteristics input={input} setInput={setInput} />
      <AddReview input={input} setInput={setInput} post={() => sendPost()} />
    </Carousel>
  );
}

export default ReviewModal;
