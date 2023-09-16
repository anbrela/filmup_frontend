

type formatProvidersProps = {
  searchParams: URLSearchParams;
  selectedProviders: number[];
  id: number;
}

export const formatProviders = ({searchParams, selectedProviders, id }: formatProvidersProps) => {
    const allParams = searchParams.entries();
    const obj = Object.fromEntries(allParams);

    if (selectedProviders.includes(id)) {
      const filteredProviders = selectedProviders.filter(
        (providerId) => providerId !== id,
      );
      if (filteredProviders.length) {
        obj.providers = filteredProviders.join(",");
      } else {
        delete obj.providers;
      }
    } else {
      obj.providers = [...selectedProviders, id].join(",");
    }

    return new URLSearchParams(obj);
}