import React, { Component } from 'react';
import './FilmCard.css';
import { Col, Row, Typography } from 'antd';
import { format } from 'date-fns';

const testObj = {
  adult: false,
  backdrop_path: '/4QLdZ2A8mkDWp2rpfgDrwmeCtUW.jpg',
  genre_ids: [28, 12, 80],
  id: 47971,
  original_language: 'en',
  original_title: 'xXx: Return of Xander Cage',
  overview: 'Extreme athlete turned government operative Xander Cage comes out of self-imposed exile, thought to be long dead, and is set on a collision course with deadly alpha warrior Xiang and his team in a race to recover a sinister and seemingly unstoppable weapon known as Pandora\'s Box. Recruiting an all-new group of thrill-seeking cohorts, Xander finds himself enmeshed in a deadly conspiracy that points to collusion at the highest levels of world governments.',
  popularity: 178.37,
  poster_path: '/hba8zREJpP1AYhaXgb2oJLQeO0K.jpg',
  release_date: '2017-01-13',
  title: 'xXx: Return of Xander Cage',
  video: false,
  vote_average: 5.9,
  vote_count: 5905
};

export default class FilmCard extends Component {
  constructor(props){
    super()
    };

  render() {
    const { filmProps } = this.props;
    const { Title } = Typography;
    return (
      <div className="film-card">
        <Row className='card-container'>
          {filmProps.baseImageUrl ? 
            <Col><img  className='card-image' src={`${filmProps.baseImageUrl}original${filmProps.filmList[0].backdrop_path}`} alt="testImage" /></Col> 
            : <Col><img src='#' alt="testImage" /></Col>}
          )}
          <Col>
            <Typography className='card-typography'>
              <Title level={5} className="card-title">
                {testObj.original_title}
              </Title>
              <div className="card-average">
                <span className="card-average-text" card-average>
                  {testObj.vote_average}
                </span>
              </div>
            </Typography>
          </Col>
        </Row>
      </div>
    );
  }
}
