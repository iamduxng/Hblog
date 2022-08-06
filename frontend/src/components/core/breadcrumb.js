import React from 'react'
import { Link } from 'gatsby'
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'

const styles = {
  breadcrumb: 'flex text-lg',
  crumbItem: 'hover:underline capitalize',
  crumbSeparator: 'mx-2',
}

const CustomBreadcrumb = ({ location, crumbLabel }) => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel,
  })
  const crumbsCount = crumbs.length

  return (
    <div className={styles.breadcrumb}>
      {crumbs.map((crumb, idx) => (
        <div key={crumb.crumbLabel}>
          <Link to={crumb.pathname} className={styles.crumbItem}>
            {crumb.crumbLabel}
          </Link>
          {(idx !== crumbsCount - 1) &&
            <span className={styles.crumbSeparator}>
              |
            </span>
          }
        </div>
      ))}
    </div>
  )
}

export default CustomBreadcrumb
