import React, {useEffect} from 'react';
import PostBlock, {Thumbnail} from '../components/PostBlock.jsx';
import eee_bot from '../Posts/project_1/thumbnail.png';

function ProjectsView(){

  const bg_color = '#292121';
  const accent_color = 'rgb(149, 119, 137)';
  const title_color = 'rgb(179, 149, 167)';
  const Title = 'Projects';

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
        <>
          <PostBlock pageColor={bg_color} accentColor={title_color} title={Title}>
            <Thumbnail 
              thumbnail_src={eee_bot}
              title='The EEE Bot - Year 1 project'
              page_src='/projects/project-1'
              accentColor={accent_color}/>
          </PostBlock>
        </>
    );

};

export default ProjectsView;