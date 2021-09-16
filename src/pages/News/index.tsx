import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsData } from 'common/selectors/News';
import { fetchNews } from './store';

const NewsContainer = () => {
  const dispatch = useDispatch();

  const newsData = useSelector(getNewsData);

  console.log(`newsData`, newsData);

  useEffect(() => {
    dispatch(fetchNews({ offset: 0, limit: 10 }));
  }, [dispatch]);

  return <div>NewsContainer</div>;
};

export default NewsContainer;
