// import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const SurveyResults = () => {
  const demographicData = {
    gender: [
      { name: 'Laki-laki', value: 45 },
      { name: 'Perempuan', value: 55 }
    ],
    age: [
      { name: '18-24', value: 30 },
      { name: '25-34', value: 40 },
      { name: '35-44', value: 20 },
      { name: '45+', value: 10 }
    ],
    occupation: [
      { name: 'Karyawan', value: 45 },
      { name: 'Wirausaha', value: 25 },
      { name: 'Mahasiswa', value: 20 },
      { name: 'Lainnya', value: 10 }
    ]
  };

  const usageData = {
    visitFrequency: [
      { name: '1-3x', value: 40 },
      { name: '4-6x', value: 35 },
      { name: '7-10x', value: 15 },
      { name: '10x+', value: 10 }
    ],
    importance: [
      { name: 'Sangat Penting', value: 45 },
      { name: 'Penting', value: 35 },
      { name: 'Cukup Penting', value: 15 },
      { name: 'Tidak Penting', value: 5 }
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
                  <PieChart width={400} height={300}>
                    <Pie
                      data={demographicData.gender}
                      cx={200}
                      cy={150}
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={{  // Tambahkan label konfigurasi
                        position: 'outside',
                        offset: 30
                      }}
                    >
                      {demographicData.gender.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
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
                  <PieChart width={400} height={300}>
                    <Pie
                      data={usageData.importance}
                      cx={200}
                      cy={150}
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={{  // Tambahkan label konfigurasi
                        position: 'outside',
                        offset: 30
                      }}
                    >
                      {usageData.importance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend 
                      
                     wrapperStyle={{
                       paddingLeft: 50,
                       margin: -25,
                       paddingRight: 20  // Tambah padding kanan
                     }} />
                  </PieChart>
                </div>
              </div>
            </section>

            {/* Key Insights */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Temuan Utama</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium mb-2">Preferensi Reward</h3>
                  <p>Mayoritas responden (80%) lebih tertarik dengan voucher diskon dan produk gratis sebagai bentuk reward.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-medium mb-2">Program Loyalty</h3>
                  <p>45% responden menganggap program loyalty sangat penting dalam keputusan untuk kembali ke café/restoran.</p>
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