import simpleRestProvider from "ra-data-simple-rest";
import convertFileTobase64 from "../helpers/convertFileTobase64";

const { REACT_APP_API_BASE_URL } = process.env;

const dataProvider = simpleRestProvider(REACT_APP_API_BASE_URL);

const customDataProvider = {
  ...dataProvider,
  create: (resource, params) => {
    if (resource !== "products" || !params.data.files) {
      // fallback to the default implementation
      return dataProvider.create(resource, params);
    }
    /**
     * For posts update only, convert uploaded image in base 64 and attach it to
     * the `picture` sent property, with `src` and `title` attributes.
     */

    // Freshly dropped pictures are File objects and must be converted to base64 strings
    const newImages = params.data.files.filter(
      (p) => p.rawFile instanceof File
    );
    const formerImages = params.data.files.filter(
      (p) => !(p.rawFile instanceof File)
    );

    return Promise.all(newImages.map(convertFileTobase64))
      .then((base64Pictures) =>
        base64Pictures.map((picture64) => ({
          src: picture64,
          title: `${params.data.title}`,
        }))
      )
      .then((transformedNewImages) =>
        dataProvider.create(resource, {
          ...params,
          data: {
            ...params.data,
            files: [...transformedNewImages, ...formerImages],
          },
        })
      );
  },
  update: (resource, params) => {
    if (resource !== "products" || !params.data.files) {
      // fallback to the default implementation
      return dataProvider.update(resource, params);
    }
    /**
     * For posts update only, convert uploaded image in base 64 and attach it to
     * the `picture` sent property, with `src` and `title` attributes.
     */

    // Freshly dropped pictures are File objects and must be converted to base64 strings
    const newImages = params.data.files.filter(
      (p) => p.rawFile instanceof File
    );
    const formerImages = params.data.files.filter(
      (p) => !(p.rawFile instanceof File)
    );

    return Promise.all(newImages.map(convertFileTobase64))
      .then((base64Pictures) =>
        base64Pictures.map((picture64) => ({
          src: picture64,
          title: `${params.data.title}`,
        }))
      )
      .then((transformedNewImages) =>
        dataProvider.update(resource, {
          ...params,
          data: {
            ...params.data,
            files: [...transformedNewImages, ...formerImages],
          },
        })
      );
  },
};

export default customDataProvider;
