import { gql } from '@/lib/graphcms'

const ProgramListFragment = gql`
  fragment ProgramListFragment on ProgramWeekConnection {
    aggregate {
      count
    }
    edges {
      node {
        bias
        date
        category
        free
        id
        title
      }
    }
  }
`

const ProgramPageFragment = gql`
  fragment ProgramPageFragment on ProgramWeek {
    bias
    category
    days {
      activeRecovery
      content
      id
      title
    }
    free
    id
    title
  }
`

export { ProgramListFragment, ProgramPageFragment }