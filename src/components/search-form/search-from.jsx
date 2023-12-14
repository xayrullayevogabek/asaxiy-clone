import React from "react";
import { useTranslation } from "react-i18next";
import "./search-form.css";

const SearchForm = ({ className }) => {
  const { t } = useTranslation();
  return (
    <form className={className}>
      <input type="text" placeholder={t("header.search") + "..."} />
      <button>{t("header.search")}</button>
    </form>
  );
};

export default SearchForm;
