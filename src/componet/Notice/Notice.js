import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import "./notice.css";

// مكون Notice الرئيسي
const Notice = () => {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // استخدام useCallback لتجنب إعادة إنشاء الكائنات غير الضرورية
  const updateText = useCallback(() => {
    const newText = t("notice");
    setText(newText);
  }, [t]);

  useEffect(() => {
    updateText();
  }, [updateText]);

  return (
    <div className="notice">
      <div className="notice-content" ref={ref}>
        <AnimatePresence>
          {inView && (
            <TextAnimation text={text} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const TextAnimation = ({ text }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.h4
      key={text}
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      {text.split("").map((el, i) => (
        <motion.span variants={item} key={i}>
          {el}
        </motion.span>
      ))}
    </motion.h4>
  );
};

export default Notice;
