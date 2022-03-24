import React from 'react'
import PropTypes from 'prop-types'
import { EventPreviewPageTemplate } from '../../templates/event-preview-page'

const EventPagePreview = ({ entry, getAsset }) => {
  return (
    <EventPreviewPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      startDate={entry.getIn(['data', 'startDate'])}
      endDate={entry.getIn(['data', 'endDate'])}
      title={entry.getIn(['data', 'title'])}

    />
  )
}

EventPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default EventPagePreview
