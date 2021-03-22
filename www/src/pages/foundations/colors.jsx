import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Color from 'color';
import SEO from '../../components/SEO';
import MeasuredItem from '../../components/MeasuredItem';
import Layout from '../../components/PageLayout';
import { Container } from '~paragon-react'; // eslint-disable-line

const utilityClasses = {
  bg: (color, level) => (level ? `bg-${color}-${level}` : `bg-${color}`),
  border: (color, level) => (level ? `border-${color}-${level}` : `border-${color}`),
  text: (color, level) => (level ? `text-${color}-${level}` : `text-${color}`),
};

const colors = [
  { themeName: 'gray', color: 'gray', unusedLevels: [] },
  { themeName: 'primary', color: 'blue', unusedLevels: [] },
  { themeName: 'brand', color: 'blue', unusedLevels: [] },
  { themeName: 'light', color: 'light', unusedLevels: [] },
  { themeName: 'dark', color: 'dark', unusedLevels: [] },
  { themeName: 'success', color: 'green', unusedLevels: [] },
  { themeName: 'info', color: 'teal', unusedLevels: [] },
  { themeName: 'danger', color: 'red', unusedLevels: [] },
  { themeName: 'warning', color: 'yellow', unusedLevels: [] },
];

const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const selectorColors = {};

function parseColors(cssSelectors) {
  const colorsAreParsed = Object.keys(selectorColors).length !== 0;
  if (colorsAreParsed) { return; }

  cssSelectors.forEach(({ selector, declarations }) => {
    // All declarations fit this shape: "background-color: #fff !important;"
    const declarationFragments = declarations[0].split(' ');
    selectorColors[selector] = declarationFragments.length
      ? declarationFragments[1]
      : null;
  });
}

const Swatch = ({ name, colorClassName, isUnused }) => (
  <div className="d-flex align-items-center mb-2">
    <MeasuredItem
      properties={['background-color']}
      renderAfter={measurements => (
        <div style={{ lineHeight: 1 }} className="small">
          <code className="mb-0 d-block text-lowercase text-dark-700">
            {name}
          </code>
          <code style={{ fontSize: '65%' }} className="text-muted">
            {Color(measurements['background-color']).hex()}
          </code>
        </div>
      )}
    >
      <div
        className={classNames('p-3 mr-2 rounded', colorClassName, {
          'unused-level': isUnused,
        })}
      />
    </MeasuredItem>
  </div>
);

Swatch.propTypes = {
  name: PropTypes.string.isRequired,
  colorClassName: PropTypes.string.isRequired,
  isUnused: PropTypes.bool.isRequired,
};

const renderColorRamp = (themeName, unusedLevels) => (
  <div style={{ flexBasis: '24%', marginRight: '1%', marginBottom: '2rem' }}>
    <h5>{themeName}</h5>
    {levels.map(level => (
      <Swatch
        name={`$${themeName}-${level}`}
        colorClassName={utilityClasses.bg(themeName, level)}
        isUnused={unusedLevels.includes(level)}
      />
    ))}
  </div>
);

// eslint-disable-next-line react/prop-types
export default function ColorsPage({ data }) {
  parseColors(data.allCssUtilityClasses.nodes); // eslint-disable-line react/prop-types

  return (
    <Layout>
      <Container size="md" className="py-5">
        <SEO title="Colors" />

        <h1>Colors</h1>

        <div className="d-flex flex-wrap">
          {colors
            .slice(0, 3)
            .map(({ themeName, unusedLevels }) => renderColorRamp(themeName, unusedLevels))}
          <div
            style={{
              flexBasis: '19%',
              marginRight: '1%',
              marginBottom: '2rem',
            }}
          >
            <h6>accents</h6>

            <Swatch name="$accent-a" colorClassName="bg-accent-a" />
            <Swatch name="$accent-b" colorClassName="bg-accent-b" />
          </div>

          {colors
            .slice(3)
            .map(({ themeName, unusedLevels }) => renderColorRamp(themeName, unusedLevels))}
        </div>

        <h3>SCSS Color Usage</h3>
        <p>Include these colors in scss files in one of two ways:</p>

        <h6>Variable name</h6>
        <code className="d-block mb-4 lead bg-gray-100 p-3">
          {'// $color_name-level '}
          <br />
          $primary-100
          <br />
          $primary-200
          <br />
          $brand-100
          <br />
          $brand-200
        </code>

        <h6>Mixin (deprecated)</h6>
        <code className="d-block mb-4 lead bg-gray-100 p-3">
          theme-color($color-name, $variant)
        </code>

        <p>
          Using the variable name instead of the theme-color mixin will make
          later upgrade paths easier. Paragon may begin to adopt CSS variables
          for theming and attempt to eliminate mixins from the public api.
        </p>

        <table className="table pgn-doc__table">
          <tbody>
            <tr>
              <td>
                <strong>Color Name</strong>
                <br />A theme color
              </td>
              <td>
                {colors.map(({ themeName }) => (
                  <code className="mr-2">{themeName}</code>
                ))}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Variant</strong>
                <br />
                <p>A number level or element type</p>
              </td>
              <td>
                <strong className="d-block">Levels </strong>
                {levels.map(({ level }) => (
                  <code className="mr-2">{level}</code>
                ))}
                <br />
                <strong className="d-block">Element types </strong>
                {[
                  'background',
                  'disabled-border',
                  'border',
                  'icon',
                  'active-border',
                  'focus',
                  'graphic',
                  'default',
                  'light-text',
                  'hover',
                  'text',
                  'active',
                  'dark-text',
                ].map(element => (
                  <code className="mr-2">{element}</code>
                ))}
              </td>
            </tr>
          </tbody>
        </table>

        <h6>Example</h6>
        <code className="d-block mb-2 bg-gray-100 p-3">
          border: solid 1px <strong>$gray-300</strong>;
        </code>

        <code className="d-block mb-2 bg-gray-100 p-3">
          border: solid 1px{' '}
          <strong>theme-color(&ldquo;gray&rdquo;, &ldquo;border&rdquo;)</strong>
          ;
        </code>

        <code className="d-block mb-4 bg-gray-100 p-3">
          border: solid 1px{' '}
          <strong>theme-color(&ldquo;gray&rdquo;, 300)</strong>;
        </code>

        <h3>CSS Class Utilties</h3>
        <p>
          Utility classes for backgrounds, borders, and text colors follow the
          format below:
        </p>
        <p>
          <code>{'.{use}-{color}-{level}'}</code>
        </p>
        <table className="table w-50">
          <thead>
            <tr>
              <th>Use</th>
              <th>Color</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-top pr-4">
                <code>bg-</code>
                <br />
                <code>border-</code>
                <br />
                <code>text-</code>
                <br />
              </td>
              <td className="align-top pr-4">
                {colors.map(({ themeName }) => (
                  <code className="d-block">{themeName}-</code>
                ))}
              </td>
              <td className="align-top pr-4">
                {levels.map(({ level }) => (
                  <code className="d-block">{level}</code>
                ))}
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Background Fills</h3>
        <div className="d-flex flex-wrap">
          {colors.map(({ themeName }) => (
            <div style={{ flexBasis: '33%' }}>
              <div className="mr-3 mb-3">
                <div
                  className={classNames(
                    'p-3 rounded',
                    utilityClasses.bg(themeName, 100),
                  )}
                >
                  <code style={{ color: 'inherit' }}>
                    .{utilityClasses.bg(themeName, 100)}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3>Borders & Lines</h3>
        <div className="d-flex flex-wrap">
          {colors.map(({ themeName }) => (
            <div style={{ flexBasis: '33%' }}>
              <div className="mr-3 mb-3">
                <div
                  className={classNames(
                    'p-3 rounded border',
                    utilityClasses.border(themeName, 200),
                  )}
                >
                  <code style={{ color: 'inherit' }}>
                    .{utilityClasses.border(themeName, 200)}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3>Icons & Semantic Lines</h3>
        <div className="d-flex flex-wrap">
          {colors.map(({ themeName }) => (
            <div style={{ flexBasis: '33%' }}>
              <div className="mr-3 mb-3">
                <div
                  className={classNames(
                    'p-3 rounded border',
                    utilityClasses.border(themeName, 300),
                  )}
                >
                  <code style={{ color: 'inherit' }}>
                    .{utilityClasses.border(themeName, 300)}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3>Text</h3>
        <p>
          Color levels 500 and above are accessible on white and 100 level
          backgrounds.
        </p>
        <div className="d-flex rounded overflow-hidden mb-3">
          <h6 className="mb-0 w-100">Lighter Text</h6>
          <h6 className="mb-0 w-100">Regular Text</h6>
          <h6 className="mb-0 w-100">Darker Text</h6>
        </div>
        <div className="d-flex">
          {[500, 700, 900].map(level => (
            <div style={{ flexBasis: '33%' }}>
              {colors.map(({ themeName, unusedLevels }) => {
                if (unusedLevels.includes(level)) { return null; }
                return (
                  <code
                    className={classNames(
                      'd-block',
                      utilityClasses.text(themeName, level),
                    )}
                  >
                    .{utilityClasses.text(themeName, level)}
                  </code>
                );
              })}
            </div>
          ))}
        </div>

        <h3>Element Fills</h3>
        <p>Buttons or other interactive elements.</p>
        <div>
          <div className="d-flex rounded overflow-hidden mb-3">
            <div className="w-100">
              <h6 className="mb-0">Default State</h6>
            </div>
            <div className="w-100">
              <h6 className="mb-0">Hover State</h6>
            </div>
            <div className="w-100">
              <h6 className="mb-0">Active State</h6>
            </div>
          </div>
          {colors.map(({ themeName }) => {
            if (themeName === 'warning') { return null; }
            return (
              <div className="d-flex rounded overflow-hidden mb-3">
                <div
                  className={classNames(
                    'p-3 w-100',
                    utilityClasses.bg(themeName, 500),
                    {
                      'text-white': themeName !== 'light',
                    },
                  )}
                >
                  <code style={{ color: 'inherit' }}>
                    .{utilityClasses.bg(themeName, 500)}
                  </code>
                </div>
                <div
                  className={classNames(
                    'p-3 w-100',
                    utilityClasses.bg(themeName, 700),
                    {
                      'text-white': themeName !== 'light',
                    },
                  )}
                >
                  <code style={{ color: 'inherit' }}>
                    .{utilityClasses.bg(themeName, 700)}
                  </code>
                </div>
                <div
                  className={classNames(
                    'p-3 w-100',
                    utilityClasses.bg(themeName, 900),
                    {
                      'text-white': themeName !== 'light',
                    },
                  )}
                >
                  <code style={{ color: 'inherit' }}>
                    .{utilityClasses.bg(themeName, 900)}
                  </code>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  {
    allCssUtilityClasses(
      filter: { declarations: { regex: "/color/" }, isUtility: { eq: true } }
      sort: { fields: selector, order: ASC }
    ) {
      nodes {
        selector
        declarations
      }
      distinct(field: selector)
    }
  }
`;
