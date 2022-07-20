import React from 'react'
import { Link } from 'gatsby'
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'

const styles = {
  breadcrumb: 'flex text-lg font-medium',
  crumbItem: 'hover:underline',
  crumbSeparator: 'mx-2',
}

const CustomBreadcrumb = ({ location, crumbLabel }) => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel,
  })

  return (
    <div className={styles.breadcrumb}>
      {crumbs.map((crumb) => (
        <div key={crumb.crumbLabel}>
          <Link to={crumb.pathname} className={styles.crumbItem}>
            {crumb.crumbLabel}
          </Link>
          {crumb.crumbSeparator && (
            <span className={styles.crumbSeparator}>
              {crumb.crumbSeparator}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default CustomBreadcrumb
