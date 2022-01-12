/** @jsx jsx */
import { jsx, Card, Text, Flex, Box } from 'theme-ui'
import { Fragment, Children, ReactElement, FC } from 'react'
import Icon from '../icon'
import Link from '../link'

interface LearnMoreLinkProps {
  to: string
}

export const LearnMoreLink: FC<LearnMoreLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      sx={{
        color: 'secondary',
        textDecoration: 'none',
        fontWeight: 'bold',
        '&:visited': { color: 'secondary' },
        '&:hover': { color: 'grayBlack' },
      }}
    >
      {children}
    </Link>
  )
}

export const LearnMoreTitle: FC = ({ children }) =>
  children && (
    <Text
      sx={{
        fontSize: 4,
        lineHeight: 'small',
        marginBottom: 4,
      }}
    >
      {children}
    </Text>
  )

const LearnMore: FC = ({ children }): ReactElement => {
  const childrenArray = Children.toArray(children)
  const title = childrenArray.find((child: ReactElement) => child.props.mdxType === 'LearnMoreTitle')
  const links = childrenArray.filter((child: ReactElement) => child.props.mdxType === 'LearnMoreLink')
  const defaultTitle = 'See also:'

  return (
    <Card variant="learnMore">
      <Flex>
        <Box>
          {links.length === 1 ? (
            <Fragment>
              {defaultTitle} {links}
            </Fragment>
          ) : (
            <Fragment>
              <div>{title || defaultTitle}</div>
              {links.map((link, i) => (
                <div key={i}>{link}</div>
              ))}
            </Fragment>
          )}
        </Box>
        <Icon name="lightbulb-on-outline" variant="learnMore" sx={{ marginTop: 1, marginLeft: 'auto' }} />
      </Flex>
    </Card>
  )
}

export default LearnMore
