import React from 'react'
import { Link } from 'gatsby'
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'

const styles = {
  breadcrumb: 'flex text-lg font-semibold',
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
        <>
          <Link to={crumb.pathname} className={styles.crumbItem}>
            {crumb.crumbLabel}
          </Link>
          {crumb.crumbSeparator && (
            <span className={styles.crumbSeparator}>
              {crumb.crumbSeparator}
            </span>
          )}
        </>
      ))}
    </div>
  )
}

export default CustomBreadcrumb
