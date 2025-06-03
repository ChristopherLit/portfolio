"use client";
import React from "react";
import { motion } from "framer-motion";

interface Image {
  src: string;
  alt: string;
}

interface ImageModalProps {
  selectedImageIndex: number;
  images: Image[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  selectedImageIndex,
  images,
  onClose,
  onNext,
  onPrev,
}) => {
  if (selectedImageIndex === -1) return null;

  const selectedImage = images[selectedImageIndex].src;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-97 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <img
          src={selectedImage}
          alt="still"
          className="object-contain"
          style={{ width: '87vw', height: '80vh' }}
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>

      {/* Close Button positioned at the top right of the screen */}
      <button
        className="fixed top-4 right-4 text-white text-5xl font-thin focus:outline-none z-50"
        style={{ lineHeight: '1', padding: '0 10px' }} // Thinner and larger
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        &times; {/* This is the 'X' symbol */}
      </button>

      {/* Left Arrow */}
      <button
        className="fixed left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex justify-center items-center hover:scale-110 transition-transform duration-300 z-50"
        style={{ marginLeft: '16px' }}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <div className="border-t-2 border-l-2 border-white w-3 h-3 transform -rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
      </button>

      {/* Right Arrow */}
      <button
        className="fixed right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex justify-center items-center hover:scale-110 transition-transform duration-300 z-50"
        style={{ marginRight: '16px' }}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <div className="border-t-2 border-r-2 border-white w-3 h-3 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
      </button>
    </div>
  );
};

export default ImageModal;