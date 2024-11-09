import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Heading
} from "@chakra-ui/react";

const ComparisonTable = () => {
  return (
    <Box p={5}>
        <Heading as={'h4'} maxWidth={'800px'} mx={'auto'} my={10} textAlign={'center'}>Not sure which CAMIO PPF is right for you? Use our comparison chart to find the best fit for your vehicle.</Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Feature</Th>
              <Th>TPU Clear Gloss</Th>
              <Th>TPU Black Gloss</Th>
              <Th>TPU Clear Matte</Th>
              <Th>TPU Black Matte</Th>
              <Th>TPH Clear Gloss</Th>
              <Th>TPH Clear Matte</Th>
              <Th>TPH Black Gloss</Th>
              <Th>TPH Color Gloss</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight={"semibold"}>Finish Type</Td>
              <Td>High Gloss</Td>
              <Td>High Gloss</Td>
              <Td>Matte</Td>
              <Td>Matte</Td>
              <Td>High Gloss</Td>
              <Td>Matte</Td>
              <Td>High Gloss</Td>
              <Td>Gloss + Color</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>Self-Healing Technology</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>Hydrophobic Properties</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>Total Film Thickness</Td>
              <Td>190 microns</Td>
              <Td>190 microns</Td>
              <Td>190 microns</Td>
              <Td>190 microns</Td>
              <Td>190 microns</Td>
              <Td>190 microns</Td>
              <Td>190 microns</Td>
              <Td>160 microns</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>Film Specification</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
              <Td>1.52*15m</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>Durability</Td>
              <Td>Superior</Td>
              <Td>Superior</Td>
              <Td>Superior</Td>
              <Td>Superior</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>UV & Weather Resistance</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Very Good</Td>
              <Td>Very Good</Td>
              <Td>Very Good</Td>
              <Td>Very Good</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>Stain Resistance</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Excellent</Td>
              <Td>Good</Td>
              <Td>Good</Td>
              <Td>Good</Td>
              <Td>Good</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>
                Elongation Rate at Break of Coating
              </Td>
              <Td>&ge; 150%</Td>
              <Td>&ge; 150%</Td>
              <Td>&ge; 150%</Td>
              <Td>&ge; 150%</Td>
              <Td>&ge; 00%</Td>
              <Td>&ge; 00%</Td>
              <Td>&ge; 00%</Td>
              <Td>&ge; 00%</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>Elongation Rate at Break</Td>
              <Td>&ge; 296%</Td>
              <Td>&ge; 296%</Td>
              <Td>&ge; 296%</Td>
              <Td>&ge; 296%</Td>
              <Td>&ge; 00%</Td>
              <Td>&ge; 00%</Td>
              <Td>&ge; 00%</Td>
              <Td>&ge; 00%</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>Warranty</Td>
              <Td>5 Years</Td>
              <Td>5 Years</Td>
              <Td>5 Years</Td>
              <Td>5 Years</Td>
              <Td>3 Years</Td>
              <Td>3 Years</Td>
              <Td>3 Years</Td>
              <Td>3 Years</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>Anti-Yellowing Guarantee</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Yes</Td>
              <Td>Moderate</Td>
              <Td>Moderate</Td>
              <Td>Moderate</Td>
              <Td>Moderate</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>Peeling Force</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
              <Td>&ge; 23.00 N/25mm</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>Tensile Strength</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
              <Td>&ge; 24 Mpa</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"semibold"}>Ideal for Application</Td>
              <Td>Luxury, High-end</Td>
              <Td>Luxury, High-end</Td>
              <Td>Modern, Stealthy</Td>
              <Td>Bold, Modern</Td>
              <Td>Budget-friendly</Td>
              <Td>Budget-friendly</Td>
              <Td>Budget-friendly</Td>
              <Td>Stylish, Personalized</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ComparisonTable;
