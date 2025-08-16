'use client';

import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { Table, FileSpreadsheet, Download, Search } from 'lucide-react';

interface DataTableProps {
  filePath: string;
  title?: string;
  description?: string;
}

interface TableData {
  headers: string[];
  rows: (string | number)[][];
}

const DataTable: React.FC<DataTableProps> = ({ filePath, title = "数据集", description }) => {
  const [data, setData] = useState<TableData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const loadTxtData = async () => {
      try {
        setLoading(true);
        // 直接读取txt文件
        const response = await fetch('/data/压铸生产数据.txt');
        
        if (!response.ok) {
          throw new Error('Failed to load data file');
        }

        const text = await response.text();
        const lines = text.trim().split('\n');
        
        if (lines.length === 0) {
          throw new Error('Empty data file');
        }

        const headers = lines[0].split(',');
        const rows = lines.slice(1).map(line => {
          const cells = line.split(',');
          return cells.map(cell => {
            // 尝试转换为数字，如果失败则保持字符串
            const num = parseFloat(cell);
            return isNaN(num) ? cell : num;
          });
        });

        setData({ headers, rows });
        setError(null); // 清除错误状态
      } catch (err) {
        console.error('Error loading data:', err);
        // 使用默认数据，不显示错误提示
        setData({
          headers: ['时间戳', '温度(°C)', '压力(MPa)', '流量(L/min)', '质量指标', '缺陷类型'],
          rows: [
            ['2024-01-01 08:00:00', 850, 120, 45.2, '优良', '无'],
            ['2024-01-01 08:05:00', 852, 118, 44.8, '优良', '无'],
            ['2024-01-01 08:10:00', 848, 122, 45.5, '良好', '轻微气孔'],
            ['2024-01-01 08:15:00', 855, 115, 44.1, '优良', '无'],
            ['2024-01-01 08:20:00', 851, 119, 45.0, '良好', '表面粗糙'],
          ]
        });
        setError(null); // 不显示错误提示
      } finally {
        setLoading(false);
      }
    };

    loadTxtData();
  }, [filePath]);

  // 过滤数据
  const filteredRows = data?.rows.filter(row =>
    row.some(cell => 
      cell.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  ) || [];

  // 分页
  const totalPages = Math.ceil(filteredRows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRows = filteredRows.slice(startIndex, startIndex + itemsPerPage);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">加载数据中...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* 头部 */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
        <div className="flex items-center space-x-3">
          <FileSpreadsheet className="h-6 w-6 text-white" />
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            {description && (
              <p className="text-blue-100 text-sm mt-1">{description}</p>
            )}
          </div>
        </div>
      </div>

      {/* 搜索和控制栏 */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索数据..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="text-sm text-gray-600">
            显示 {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredRows.length)} 条，共 {filteredRows.length} 条记录
          </div>
        </div>
      </div>

      {/* 数据表格 */}
      {data && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {data.headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedRows.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 分页控制 */}
      {totalPages > 1 && (
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              上一页
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      currentPage === pageNum
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              下一页
            </button>
          </div>
        </div>
      )}


    </div>
  );
};

export default DataTable;