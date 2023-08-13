'use client'
import './reviewForPage.scss';
import { faSquareArrowUpRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { reviewsArray } from '../../api/dataReview.js';
import { motion } from "framer-motion";
const ReviewForPage: React.FC = () => {
  return (
    <div className="review-page">
      <div className="container">
        <div className="header">
          <h1>Ulasan dari client-client kami</h1>
          <p>
            Rated <FontAwesomeIcon icon={faStar} className="icon" /> 5/5 on
            <Link href="https://g.page/r/CQxApMZQ-s27EB0/review" target="_blank">
              <FontAwesomeIcon icon={faSquareArrowUpRight} className="icon-up" /><span>Google</span>
            </Link>
          </p>
        </div>
        <div className="box-container">
          {reviewsArray.map((review, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box" key={review.id}>
              <h1 className="name">{review.name}</h1>
              <span className="stars">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
              </span>
              <p>{review.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewForPage;