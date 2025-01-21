// import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const SurveyResults = () => {
  const demographicData = {
    gender: [
      { name: 'Laki-laki', value: 14 },
      { name: 'Perempuan', value: 29 }
    ],
    age: [
        { name: '19-20', value: 4 },
        { name: '21-23', value: 17 },
        { name: '24-26', value: 8 },
        { name: '27-29', value: 8 },
        { name: '30+', value: 6 }
      ],
    occupation: [
      { name: 'Karyawan', value: 45 },
      { name: 'Wirausaha', value: 25 },
      { name: 'Mahasiswa', value: 20 },
      { name: 'Lainnya', value: 10 }
    ]
  };

  const rewardPreferences = [
    { name: 'Voucher Diskon', value: 28 },
    { name: 'Poin untuk Menu', value: 22 },
    { name: 'Birthday Special', value: 12 },
    { name: 'Produk Gratis', value: 11 },
    { name: 'Special Treatment', value: 9 }
  ];

  const usageData = {
    visitFrequency: [
        { name: '1-3x', value: 31 },
        { name: '4-6x', value: 6 },
        { name: '7-10x', value: 3 },
        { name: '10x+', value: 3 }
      ],
    importance: [
      { name: 'Sangat Penting', value: 11 },
      { name: 'Penting', value: 20 },
      { name: 'Cukup Penting', value: 8 },
      { name: 'Tidak Penting', value: 4 }
    ]
  };

  return (
    <div className="space-y-8 p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Hasil Survei Program Loyalty</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-12">
            {/* Demographic Section */}
            <section>
              <h2 className="text-xl font-semibold mb-6">Demografi Responden</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Jenis Kelamin</h3>
                  <PieChart width={500} height={300}>
                    <Pie
                      data={demographicData.gender}
                      cx={200}
                      cy={150}
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {demographicData.gender.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} (${((value/43)*100).toFixed(1)}%)`, 'Jumlah']}/>
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="center"
                      wrapperStyle={{
                        paddingTop: "20px"
                      }}
                    />
                  </PieChart>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Usia</h3>
                  <BarChart width={400} height={300} data={demographicData.age}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </div>
              </div>
            </section>

            {/* Usage Analysis Section */}
            <section>
              <h2 className="text-xl font-semibold mb-6">Analisis Penggunaan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Frekuensi Kunjungan per Bulan</h3>
                  <BarChart width={400} height={300} data={usageData.visitFrequency}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#00C49F" />
                  </BarChart>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Tingkat Kepentingan Program Loyalty</h3>
                  <PieChart width={400} height={400}>
                    <Pie
                      data={usageData.importance}
                      cx={200}
                      cy={160}
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {usageData.importance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend 
                      
                      wrapperStyle={{
                        paddingLeft: "20px",
                      }}
                    />
                  </PieChart>
                </div>
              </div>
            </section>

               {/* Reward Preferences Section */}
               <section>
              <h2 className="text-xl font-semibold mb-6">Preferensi Reward</h2>
              <div>
                <BarChart width={800} height={300} data={rewardPreferences}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8">
                    {rewardPreferences.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
                <div className="mt-4 text-sm text-gray-600">
                  * Responden dapat memilih maksimal 2 jenis reward
                </div>
              </div>
            </section>

            {/* Key Insights */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Temuan Utama</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium mb-2">Preferensi Reward</h3>
                  <p>Voucher diskon (65%) dan poin untuk menu (51%) menjadi pilihan reward yang paling diminati.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-medium mb-2">Program Loyalty</h3>
                  <p>72% responden menganggap program loyalty penting/sangat penting dalam keputusan untuk kembali.</p>
                </div>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SurveyResults;