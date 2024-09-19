import React from 'react';

const SQATable = () => {
  return (
    <div className="overflow-x-auto mx-20 my-4">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="p-4 border border-gray-300">Features</th>
            <th className="p-4 border border-gray-300 bg-blue-900">Startup Booster</th>
            <th className="p-4 border border-gray-300 bg-pink-600">Agile Flex</th>
            <th className="p-4 border border-gray-300 bg-blue-700">Enterprise Elite</th>
            <th className="p-4 border border-gray-300 bg-orange-500">BalancePro</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          <tr>
            <td className="p-4 border border-gray-300">Targeted To</td>
            <td className="p-4 border border-gray-300">Mid-sized and high-budget projects</td>
            <td className="p-4 border border-gray-300">Perfect for small and medium projects</td>
            <td className="p-4 border border-gray-300">Profitable for established companies</td>
            <td className="p-4 border border-gray-300">Agencies with multiple projects</td>
          </tr>

          <tr className="bg-gray-100">
            <td className="p-4 border border-gray-300">Ideal For</td>
            <td className="p-4 border border-gray-300">Initial QA setup</td>
            <td className="p-4 border border-gray-300">Subscription-based engagement</td>
            <td className="p-4 border border-gray-300">Large-scale execution</td>
            <td className="p-4 border border-gray-300">Flexible budget and execution</td>
          </tr>

          <tr>
            <td className="p-4 border border-gray-300">Updates & Communication</td>
            <td className="p-4 border border-gray-300">Weekly meetings</td>
            <td className="p-4 border border-gray-300">Bi-weekly meetings</td>
            <td className="p-4 border border-gray-300">Priority reporting</td>
            <td className="p-4 border border-gray-300">Scheduled program alignment</td>
          </tr>

          <tr className="bg-gray-100">
            <td className="p-4 border border-gray-300">Issue Resolution</td>
            <td className="p-4 border border-gray-300">Immediate response</td>
            <td className="p-4 border border-gray-300">Priority handling</td>
            <td className="p-4 border border-gray-300">Dedicated support</td>
            <td className="p-4 border border-gray-300">Flexible resolution timeline</td>
          </tr>

          <tr>
            <td className="p-4 border border-gray-300">Promotional Discount</td>
            <td className="p-4 border border-gray-300">Yes</td>
            <td className="p-4 border border-gray-300">Yes</td>
            <td className="p-4 border border-gray-300">No</td>
            <td className="p-4 border border-gray-300">No</td>
          </tr>

          <tr className="bg-gray-100">
            <td className="p-4 border border-gray-300">Key Features</td>
            <td className="p-4 border border-gray-300">Automated consulting and reporting</td>
            <td className="p-4 border border-gray-300">On-demand audits</td>
            <td className="p-4 border border-gray-300">Custom reporting for managers</td>
            <td className="p-4 border border-gray-300">Programmed system execution</td>
          </tr>

          <tr>
            <td className="p-4 border border-gray-300">Payment Model</td>
            <td className="p-4 border border-gray-300">Monthly</td>
            <td className="p-4 border border-gray-300">Pay as you go</td>
            <td className="p-4 border border-gray-300">Customized monthly</td>
            <td className="p-4 border border-gray-300">Project-based</td>
          </tr>

          {/* Action Buttons */}
          <tr className="bg-gray-100">
            <td className="p-4 border border-gray-300"></td>
            <td className="p-4 border border-gray-300">
              <button className="bg-blue-600 text-white py-2 px-4 rounded">Book Now</button>
            </td>
            <td className="p-4 border border-gray-300">
              <button className="bg-blue-600 text-white py-2 px-4 rounded">Book Now</button>
            </td>
            <td className="p-4 border border-gray-300">
              <button className="bg-blue-600 text-white py-2 px-4 rounded">Book Now</button>
            </td>
            <td className="p-4 border border-gray-300">
              <button className="bg-blue-600 text-white py-2 px-4 rounded">Book Now</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SQATable;
