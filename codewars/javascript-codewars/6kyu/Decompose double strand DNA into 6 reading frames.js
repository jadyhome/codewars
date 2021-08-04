////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57519060f2dac7ec95000c8e/train/javascript

// In a double strand DNA you find 3 more Reading frames
// than the single strand DNA reading frames base on the reverse complement-strand.

// Input
// Given a DNA sequence like the following
// AGGTGACACCGCAAGCCTTATATTAGC
// Processing
// In the reverse complement the following transformations are made

// A-->T
// G-->C
// T-->A
// C-->G

// Due to the splicing of DNA strands and the fixed reading direction of a nucleotide strand,
// the reverse complement gets read from right to left.

// DNA                     AGGTGACACCGCAAGCCTTATATTAGC
// Reverse complement:     TCCACTGTGGCGTTCGGAATATAATCG
// reversed reverse frame: GCTAATATAAGGCTTGCGGTGTCACCT

// Output
// You'll have to output:
// Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC
// Frame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC
// Frame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C

// Reverse Frame 1: GCT AAT ATA AGG CTT GCG GTG TCA CCT
// Reverse Frame 2: G CTA ATA TAA GGC TTG CGG TGT CAC CT
// Reverse Frame 3: GC TAA TAT AAG GCT TGC GGT GTC ACC T
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

var decomposeDoubleStrand = function (doubleStrand) {
  let frame1 = doubleStrand.match(/.../g).join(" ");
  let frame2 = doubleStrand.slice(0, 1) + " " + 
               doubleStrand.slice(1, -2).match(/.../g).join(" ") + " " +
               doubleStrand.slice(-2);
  let frame3 = doubleStrand.slice(0, 2) + " " +
               doubleStrand.slice(2, -1).match(/.../g).join(" ") + " " +
               doubleStrand.slice(-1);

  const transformation = { A: "T", G: "C", T: "A", C: "G" };
  const reversedReverse = doubleStrand
                          .split("")
                          .map((r) => (r = transformation[r]))
                          .reverse()
                          .join("");

  let rframe1 = reversedReverse.match(/.../g).join(" ");
  let rframe2 = reversedReverse.slice(0, 1) + " " +
                reversedReverse.slice(1, -2).match(/.../g).join(" ") + " " +
                reversedReverse.slice(-2);
  let rframe3 = reversedReverse.slice(0, 2) + " " +
                reversedReverse.slice(2, -1).match(/.../g).join(" ") + " " +
                reversedReverse.slice(-1);

  return (
    "Frame 1: " + frame1 + "\n" +
    "Frame 2: " + frame2 + "\n" +
    "Frame 3: " + frame3 + "\n\n" +
    "Reverse Frame 1: " + rframe1 + "\n" +
    "Reverse Frame 2: " + rframe2 + "\n" +
    "Reverse Frame 3: " + rframe3
  );
};

/////// SOLUTION ///////
