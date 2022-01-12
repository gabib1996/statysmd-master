import React from "react"
import PropTypes from "prop-types"
// import DOMPurify from "dompurify"

export default function Article({ data }) {
  return (
    <>
      {React.Children.toArray(
        data.map(i => {
          if (i.type === "ol" || i.type === "ul") {
            const Wrap = i.type
            const Type = "li"

            return (
              <Wrap>
                {React.Children.toArray(
                  i.text.map(j => (
                    <Type
                      dangerouslySetInnerHTML={{
                        __html: j,
                      }}
                    />
                  ))
                )}
              </Wrap>
            )
          }

          const Type = i.type

          return React.Children.toArray(
            i.text.map(j => (
              <Type
                dangerouslySetInnerHTML={{ __html: j }}
              />
            ))
          )
        })
      )}
    </>
  )
}

Article.propTypes = {
  data: PropTypes.array.isRequired,
}
