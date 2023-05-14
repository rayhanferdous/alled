import Seo from '@/shared/layout-components/seo/seo';
import React from 'react';
import PageHeader from '../../../../shared/layout-components/pageheader/pageHeader';

const EmptyPage = () => {
  return (
  <div >
    <Seo title="Empty"/>

    <PageHeader titles="Empty" active="Empty" items={['Pages']} />
                            {/* <!-- ROW-1 OPEN --> */}
                        {/* <!-- Row --> */}
                        <div className="row ">
                            <div className="col-md-12">
                            </div>
                        </div>
                        {/* <!-- /Row --> */}
                    </div>

);
};
EmptyPage.layout = "Contentlayout";
export default EmptyPage;
