import { useMemo } from "react";
import { gql, useQuery } from "@apollo/client";
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      continent {
        name
      }
      languages {
        name
        code
      }
    }
  }
`;

const LIST_LANGUAGES = gql`
  {
    languages {
      name
    }
  }
`;
const LIST_CONTINENTS = gql`
  {
    continents {
      name
    }
  }
`;

const useFilteredData = (inputContent, showByContinent) => {
  const {
    data: dataLang,
    loading: loadingLang,
    error: errorLang,
  } = useQuery(LIST_LANGUAGES);
  const {
    data: dataCont,
    loading: loadingCont,
    error: errorCont,
  } = useQuery(LIST_CONTINENTS);
  const { data, loading, error } = useQuery(LIST_COUNTRIES);

  const results = useMemo(() => {
    if (
      !loading &&
      !error &&
      !loadingCont &&
      !errorCont &&
      !loadingLang &&
      !errorLang
    ) {
      const res = inputContent
        ? data.countries.filter((c) => {
            return c.name.toLowerCase().startsWith(inputContent.toLowerCase());
          })
        : data.countries;
      if (showByContinent) {
        return dataCont.continents.map(({ name }) => ({
          name,
          countries: res.filter(({ continent }) => continent.name === name),
        }));
      } else {
        return dataLang.languages.map(({ name }) => ({
          name,
          countries: res.filter(({ languages }) =>
            languages.some((lang) => lang.name === name)
          ),
        }));
      }
    }
  }, [
    inputContent,
    data,
    dataCont,
    dataLang,
    error,
    errorCont,
    errorLang,
    loading,
    loadingCont,
    loadingLang,
    showByContinent,
  ]);
  return { results, loading, error };
};

export default useFilteredData;
