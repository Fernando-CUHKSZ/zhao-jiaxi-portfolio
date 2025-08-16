import { NextApiRequest, NextApiResponse } from 'next';
import * as XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { filePath } = req.body;

    if (!filePath) {
      return res.status(400).json({ error: 'File path is required' });
    }

    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }

    // 读取Excel文件
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // 读取第一个工作表
    const worksheet = workbook.Sheets[sheetName];

    // 将工作表转换为JSON数组
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    if (!jsonData || jsonData.length === 0) {
      return res.status(400).json({ error: 'No data found in Excel file' });
    }

    // 提取表头和数据行
    const headers = jsonData[0] as string[];
    const rows = jsonData.slice(1) as (string | number)[][];

    // 过滤空行
    const filteredRows = rows.filter(row => 
      row.some(cell => cell !== null && cell !== undefined && cell !== '')
    );

    return res.status(200).json({
      headers,
      rows: filteredRows
    });

  } catch (error) {
    console.error('Error reading Excel file:', error);
    return res.status(500).json({ 
      error: 'Failed to read Excel file',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

// 配置API路由以支持较大的文件
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};