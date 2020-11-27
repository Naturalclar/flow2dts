import { ArtworkDetails_artwork } from "__generated__/ArtworkDetails_artwork.graphql"
import { getCurrentEmissionState } from "lib/store/GlobalStore"
import { Schema } from "lib/utils/track"
import { Box, Join, Sans, Spacer } from "palette"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { ArtworkDetailsRow } from "./ArtworkDetailsRow"
import { RequestConditionReportQueryRenderer } from "./RequestConditionReport"

interface ArtworkDetailsProps {
  artwork: ArtworkDetails_artwork
}

export class ArtworkDetails extends React.Component<ArtworkDetailsProps> {
  render() {
    const { artwork } = this.props

    const enableLotConditionReport = getCurrentEmissionState().options.AROptionsLotConditionReport

    const listItems = [
      { title: "Medium", value: artwork.category },
      {
        title: "Condition",
        value:
          enableLotConditionReport && artwork.canRequestLotConditionsReport ? (
            <RequestConditionReportQueryRenderer artworkID={artwork.slug} />
          ) : (
            artwork.conditionDescription && artwork.conditionDescription.details
          ),
      },
      { title: "Signature", value: artwork.signatureInfo && artwork.signatureInfo.details },
      {
        title: "Certificate of Authenticity",
        value: artwork.certificateOfAuthenticity && artwork.certificateOfAuthenticity.details,
      },
      { title: "Frame", value: artwork.framed && artwork.framed.details },
      { title: "Series", value: artwork.series },
      { title: "Publisher", value: artwork.publisher },
      { title: "Manufacturer", value: artwork.manufacturer },
      { title: "Image rights", value: artwork.image_rights },
    ]

    const displayItems = listItems.filter((i) => i.value != null && i.value !== "")

    return (
      <Box>
        <Join separator={<Spacer my={1} />}>
          <Sans size="4t">Artwork details</Sans>
          {displayItems.map(({ title, value }, index) => (
            <ArtworkDetailsRow
              key={index.toString()}
              title={title}
              value={value}
              tracking={{
                readMore: {
                  flow: Schema.Flow.ArtworkDetails,
                  contextModule: Schema.ContextModules.ArtworkDetails,
                },
              }}
            />
          ))}
        </Join>
      </Box>
    )
  }
}

export const ArtworkDetailsFragmentContainer = createFragmentContainer(ArtworkDetails, {
  artwork: graphql`
    fragment ArtworkDetails_artwork on Artwork {
      slug
      category
      conditionDescription {
        label
        details
      }
      signatureInfo {
        label
        details
      }
      certificateOfAuthenticity {
        label
        details
      }
      framed {
        label
        details
      }
      series
      publisher
      manufacturer
      image_rights: imageRights
      canRequestLotConditionsReport
    }
  `,
})
