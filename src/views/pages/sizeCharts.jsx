import React, { Component, Fragment } from 'react'
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks'
import LogoImg from 'assets/img/logo.png'
import Footer from 'components/Footer/Footer'


export default class SizeChart extends Component {

    render () {

        return (
            <Fragment>
                  <Header
                    brand={<Fragment> <img className="nav-logo" src={LogoImg} /> <span className="nav-text"> SHOES CLIMATE </span></Fragment>}
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="white"
                    changeColorOnScroll={{
                    height: 300,
                    color: "white"
                    }}
                />
                <div  className="size-chart" >

                <h2>Size Charts </h2>
                <div
                    dangerouslySetInnerHTML={{__html: `
                    <div>
                    <div>
                <caption>Men's Size Conversions</caption> 
                <table class="table table-bordered">
                <tbody>
                <tr class="nolink">
                <th class="us-sizes">US Sizes</th>
                <th>Euro Sizes</th>
                <th>UK Sizes</th>
                <th>Inches</th>
                <th>CM</th>
                </tr>
                <tr>
                <td>4</td>
                <td>35</td>
                <td>2</td>
                <td>8.1875"</td>
                <td>20.8</td>
                </tr>
                <tr>
                <td>4.5</td>
                <td>35</td>
                <td>2.5</td>
                <td>8.375"</td>
                <td>21.3</td>
                </tr>
                <tr>
                <td>5</td>
                <td>35-36</td>
                <td>3</td>
                <td>8.5"</td>
                <td>21.6</td>
                </tr>
                <tr>
                <td>5.5</td>
                <td>36</td>
                <td>3.5</td>
                <td>8.75"</td>
                <td>22.2</td>
                </tr>
                <tr>
                <td>6</td>
                <td>36-37</td>
                <td>4</td>
                <td>8.875"</td>
                <td>22.5</td>
                </tr>
                <tr>
                <td>6.5</td>
                <td>37</td>
                <td>4.5</td>
                <td>9.0625"</td>
                <td>23</td>
                </tr>
                <tr>
                <td>7</td>
                <td>37-38</td>
                <td>5</td>
                <td>9.25"</td>
                <td>23.5</td>
                </tr>
                <tr>
                <td>7.5</td>
                <td>38</td>
                <td>5.5</td>
                <td>9.375"</td>
                <td>23.8</td>
                </tr>
                <tr>
                <td>8</td>
                <td>38-39</td>
                <td>6</td>
                <td>9.5"</td>
                <td>24.1</td>
                </tr>
                <tr>
                <td>8.5</td>
                <td>39</td>
                <td>6.5</td>
                <td>9.6875"</td>
                <td>24.6</td>
                </tr>
                <tr>
                <td>9</td>
                <td>39-40</td>
                <td>7</td>
                <td>9.875"</td>
                <td>25.1</td>
                </tr>
                <tr>
                <td>9.5</td>
                <td>40</td>
                <td>7.5</td>
                <td>10"</td>
                <td>25.4</td>
                </tr>
                <tr>
                <td>10</td>
                <td>40-41</td>
                <td>8</td>
                <td>10.1875"</td>
                <td>25.9</td>
                </tr>
                <tr>
                <td>10.5</td>
                <td>41</td>
                <td>8.5</td>
                <td>10.3125"</td>
                <td>26.2</td>
                </tr>
                <tr>
                <td>11</td>
                <td>41-42</td>
                <td>9</td>
                <td>10.5"</td>
                <td>26.7</td>
                </tr>
                <tr>
                <td>11.5</td>
                <td>42</td>
                <td>9.5</td>
                <td>10.6875"</td>
                <td>27.1</td>
                </tr>
                <tr>
                <td>12</td>
                <td>42-43</td>
                <td>10</td>
                <td>10.875"</td>
                <td>27.6</td>
                </tr>
                </tbody>
                </table></div>
                <div class="table-wrap">
                <caption>Women's Size Conversions</caption>
                <table class="table table-bordered">
                <tbody>
                <tr class="nolink">
                <th class="us-sizes">US Sizes</th>
                <th>Euro Sizes</th>
                <th>UK Sizes</th>
                <th>Inches</th>
                <th>CM</th>
                </tr>
                <tr>
                <td>6</td>
                <td>39</td>
                <td>5.5</td>
                <td>9.25"</td>
                <td>23.5</td>
                </tr>
                <tr>
                <td>6.5</td>
                <td>39</td>
                <td>6</td>
                <td>9.5"</td>
                <td>24.1</td>
                </tr>
                <tr>
                <td>7</td>
                <td>40</td>
                <td>6.5</td>
                <td>9.625"</td>
                <td>24.4</td>
                </tr>
                <tr>
                <td>7.5</td>
                <td>40-41</td>
                <td>7</td>
                <td>9.75"</td>
                <td>24.8</td>
                </tr>
                <tr>
                <td>8</td>
                <td>41</td>
                <td>7.5</td>
                <td>9.9375"</td>
                <td>25.4</td>
                </tr>
                <tr>
                <td>8.5</td>
                <td>42</td>
                <td>8</td>
                <td>10.125"</td>
                <td>25.7</td>
                </tr>
                <tr>
                <td>9</td>
                <td>42.5</td>
                <td>8.5</td>
                <td>10.25"</td>
                <td>26</td>
                </tr>
                <tr>
                <td>9.5</td>
                <td>43</td>
                <td>9</td>
                <td>10.4375"</td>
                <td>26.7</td>
                </tr>
                <tr>
                <td>10</td>
                <td>44</td>
                <td>9.5</td>
                <td>10.5625"</td>
                <td>27</td>
                </tr>
                <tr>
                <td>10.5</td>
                <td>44-45</td>
                <td>10</td>
                <td>10.75"</td>
                <td>27.3</td>
                </tr>
                <tr>
                <td>11</td>
                <td>45</td>
                <td>10.5</td>
                <td>10.9375"</td>
                <td>27.9</td>
                </tr>
                <tr>
                <td>11.5</td>
                <td>45-46</td>
                <td>11</td>
                <td>11.125"</td>
                <td>28.3</td>
                </tr>
                <tr>
                <td>12</td>
                <td>45</td>
                <td>11.5</td>
                <td>11.25"</td>
                <td>28.6</td>
                </tr>
                <tr>
                <td>13</td>
                <td>46</td>
                <td>12.5</td>
                <td>11.5625"</td>
                <td>29.4</td>
                </tr>
                <tr>
                <td>14</td>
                <td>47</td>
                <td>13.5</td>
                <td>11.875"</td>
                <td>30.2</td>
                </tr>
                <tr>
                <td>15</td>
                <td>48</td>
                <td>14.5</td>
                <td>12.1875"</td>
                <td>31</td>
                </tr>
                <tr>
                <td>16</td>
                <td>49</td>
                <td>15.5</td>
                <td>12.5"</td>
                <td>31.8</td>
                </tr>
                </tbody>
                </table></div>
                  </div>
                    `}}
                 className="sizeChartTable">

                </div>
                </div>
            
                <Footer />
            </Fragment>
        )
    }
}