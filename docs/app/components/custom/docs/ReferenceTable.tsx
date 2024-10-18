'use client';

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@/components/custom/table/Table';
import { PropBadge } from '@/styles/custom';
import React from 'react';

const ReferenceTable = ({ reference }: ReferenceType) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Prop</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Default</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {reference?.map((ref, index) => (
          <TableRow key={index}>
            <TableCell>
              <PropBadge>{ref.prop}</PropBadge>
            </TableCell>
            <TableCell>
              <PropBadge>{ref.type}</PropBadge>
            </TableCell>
            <TableCell>{ref.description}</TableCell>
            <TableCell>
              <PropBadge>{ref.default}</PropBadge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ReferenceTable;
