#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Created on Sun Oct 20 14:39:42 2019

@author: labuv
"""

from bs4 import BeautifulSoup
import os

input = "print/index.html"

# Extract relevant part of the page
soup = BeautifulSoup(open(input), 'html.parser')
CV_tex = soup.find('code').text

# Translate html escape to latex escape
escape_characters = {'&percnt'  : '\%',
                     '&amp;'    :'\&',
                     '&gt;'     : '>',
                     '&lt;'     : '<',
                     '[:tab:]'  : '&'}
CV_tex_clean = CV_tex
for htmlesc, latexesc in escape_characters.items():
    print('Substitute', htmlesc, 'to', latexesc)
    CV_tex_clean = CV_tex_clean.replace(htmlesc, latexesc)

# Remove old .tex if exists
if os.path.exists('uploads/CV_Nurfatima_Jandarova.tex'):
    os.remove('uploads/CV_Nurfatima_Jandarova.tex')
    print(os.path.exists('uploads/CV_Nurfatima_Jandarova.tex'))
    
# Write the output to tex file
file = open('uploads/CV_Nurfatima_Jandarova.tex', 'w')
file.write(CV_tex_clean)
file.close()
