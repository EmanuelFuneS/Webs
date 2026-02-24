/**
 * feature-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::feature-page.feature-page",
  ({ strapi }) => {
    const schema = strapi.contentTypes["api::feature-page.feature-page"];

    const buildDeepPopulate = (schema: any, maxDepth = 5, currentDepth = 0) => {
      if (currentDepth >= maxDepth) return true;

      const populate: any = {};
      for (const [attributeName, attribute] of Object.entries(
        schema.attributes,
      )) {
        const attr = attribute as any;

        if (
          [
            "createdAt",
            "updatedAt",
            "publishedAt",
            "createdBy",
            "updatedBy",
            "locale",
            "localizations",
          ].includes(attributeName)
        ) {
          continue;
        }

        const populatableTypes = [
          "component",
          "dynamiczone",
          "relation",
          "media",
        ];

        if (!populatableTypes.includes(attr.type)) {
          continue;
        }

        switch (attr.type) {
          case "component":
            if (attr.repeatable) {
              const componentSchema = strapi.components[attr.component];
              populate[attributeName] = {
                populate: buildDeepPopulate(
                  componentSchema,
                  maxDepth,
                  currentDepth + 1,
                ),
              };
            } else {
              const componentSchema = strapi.components[attr.component];
              populate[attributeName] = {
                populate: buildDeepPopulate(
                  componentSchema,
                  maxDepth,
                  currentDepth + 1,
                ),
              };
            }
            break;

          case "dynamiczone":
            const dzPopulate: any = {};

            for (const componentUID of attr.components) {
              const componentSchema = strapi.components[componentUID];
              const compPopulate = buildDeepPopulate(
                componentSchema,
                maxDepth,
                currentDepth + 1,
              );
              if (Object.keys(compPopulate).length > 0) {
                dzPopulate[componentUID] = { populate: "*" }; // ← cambio aquí
              }
            }

            if (Object.keys(dzPopulate).length > 0) {
              populate[attributeName] = { on: dzPopulate };
            } else {
              populate[attributeName] = true;
            }

            break;
          case "relation":
            populate[attributeName] = { populate: "*" };
            break;
          case "media":
            if (currentDepth === 0) {
              populate[attributeName] = true;
            }
            break;
        }
      }
      return Object.keys(populate).length > 0 ? populate : true;
    };

    const populate = buildDeepPopulate(schema);

    return {
      async find(ctx) {
        ctx.query = {
          populate,
        };
        return await super.find(ctx);
      },
    };
  },
);
