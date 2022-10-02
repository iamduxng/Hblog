// import * as yup from 'yup';
import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import getTrad from './utils/getTrad';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.customFields.register({
      name: 'map-field',
      pluginId: name,
      type: 'string',
      intlLabel: {
        id: getTrad('gmap.map_field.label'),
        defaultMessage: "Check-in location",
      },
      intlDescription: {
        id: getTrad('gmap.map_field.description'),
        defaultMessage: "Where was your article posted?",
      },
      components: {
        Input: async () => import(
          /* webpackChunkName: "color-picker-input-component" */ './components/MapField'
        ),
      },
      options: {
        advanced: [
          {
            sectionTitle: {
              id: 'global.settings',
              defaultMessage: 'Settings',
            },
            items: [
              {
                name: 'required',
                type: 'checkbox',
                intlLabel: {
                  id: getTrad('gmap.map_field.options.advanced.requiredField'),
                  defaultMessage: 'Required field',
                },
                description: {
                  id: getTrad('gmap.map_field.options.advanced.requiredField.description'),
                  defaultMessage: "You won't be able to create an entry if this field is empty",
                },
              },
            ],
          },
        ],
        // validator: args => ({
        //   format: yup.string().required({
        //     id: getTrad('gmap.map_field.options.validator.required'),
        //     defaultMessage: 'The location of a travel article is required',
        //   }),
        // }),
      },
    })
  },

  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map(locale => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
