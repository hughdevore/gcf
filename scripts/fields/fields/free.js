import Field from "../components/field";
import { InnerBlocks } from "@wordpress/blocks";

const freeField = {
  name: "free",
  label: "Free HTML Area",
  getBlockSettings(fieldConfig) {
    return {
      supports: {
        html: true
      },
      edit({ attributes, setAttributes }) {
        return (
          <Field label={fieldConfig.title || fieldConfig.name}>
            {() => (
              <div className="gcf-freearea">
                <InnerBlocks />
              </div>
            )}
          </Field>
        );
      },
      save() {
        return <InnerBlocks.Content />;
      }
    };
  }
};

export default freeField;
