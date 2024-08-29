import React, {useEffect} from 'react';
import PostBlock, {Thumbnail} from '../components/PostBlock.jsx';
import thumbnail from '../Posts/blog_1/thumbnail.png';

function BlogView(){

  const bg_color = 'rgb(44, 38, 31)';
  const accent_color = 'rgb(243, 180, 108)';
  const title_color = 'rgb(273, 210, 138)'
  const Title = 'Blog';

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PostBlock pageColor={bg_color} accentColor={title_color} title={Title}>
        <Thumbnail 
          thumbnail_src={thumbnail}
          title='The National Public Data breach'
          page_src='/projects/blog-1'
          accentColor={accent_color}/>
      </PostBlock>
    </>
  );

};

export default BlogView;