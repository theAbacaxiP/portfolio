import React, {useEffect} from 'react';
import PostBlock, {Thumbnail} from '../components/PostBlock.jsx';
import thumbnail from '../Posts/blog_1/thumbnail.jpg';
import thumbnail_2 from '../Posts/blog_2/thumbnail.jpg';

function BlogView(){

  const bg_color = 'rgb(44, 38, 31)';
  const accent_color = 'rgb(243, 180, 108)';
  const title_color = 'rgb(273, 210, 138)'
  const Title = 'Blog';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'KyanePerera | Blog';
  }, [])

  return (
    <>
      <PostBlock pageColor={bg_color} accentColor={title_color} title={Title}>
        <Thumbnail 
          thumbnail_src={thumbnail_2}
          title='The arrest of Telegram CEO, Pavel Durov'
          page_src='/blog/blog-2'
          accentColor={accent_color}
          publish='10/09/2024'/>
        <Thumbnail 
          thumbnail_src={thumbnail}
          title='The National Public Data breach'
          page_src='/blog/blog-1'
          accentColor={accent_color}
          publish='29/08/2024'/>
      </PostBlock>
    </>
  );

};

export default BlogView;